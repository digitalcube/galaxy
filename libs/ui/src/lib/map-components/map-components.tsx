import * as React from 'react';

type DefaultCompProps = {
  type: string;
};

const DefaultComp = ({ type }: DefaultCompProps) => {
  // throw new Error(`Could not find a component mapping for type "${type}"`);
  const msg = `No component for type: ${type}`;
  console.log(msg);
  return msg;
};

/**
 * Collection of data about an individual list item and its surrounding
 * context.
 */
export interface TCtx<
  T extends keyof TMap,
  TMap extends Record<string, React.ComponentType>,
  TData,
  TMeta
> {
  /** List of elements. */
  list: TData[];
  /** List of keys for each element in `list`. */
  keys: React.Key[];
  /** List of types for each element in `list`. */
  types: (keyof TMap)[];
  /** List of components for each element in `list`. */
  comps: React.ComponentType[];
  /** Mapping of types to React components. */
  map: TMap;
  /** Data provided to the `meta` prop. */
  meta?: TMeta;
  /** Index of the current element. */
  index: number;
  /** The current element. */
  data: TData;
  /** Key of the current element. */
  key: React.Key;
  /** Type of the current element. */
  type: T;
  /** Component for the current element. */
  Comp: TMap[T];
  /** The previous element. */
  previousData?: TData;
  /** Key of the previous element. */
  previousKey?: React.Key;
  /** Type of the previous element. */
  previousType?: keyof TMap;
  /** Component for the previous element. */
  PreviousComp?: React.ComponentType;
  /** The next element. */
  nextData?: TData;
  /** Key of the next element. */
  nextKey?: React.Key;
  /** Type of the next element. */
  nextType?: keyof TMap;
  /** Component for the next element. */
  NextComp?: React.ComponentType;
}

/**
 * Collection of data about an individual list item and its surrounding
 * context. Includes context properties from `mapDataToContext`.
 */
export interface TCtxWithContext<
  T extends keyof TMap,
  TMap extends Record<string, React.ComponentType>,
  TData,
  TMeta,
  TContext
> extends TCtx<T, TMap, TData, TMeta> {
  /** List of context values for each element in `list`. */
  contexts: (TContext | undefined)[];
  /** Context for the current element. */
  context: TContext | undefined;
  /** Context for the previous element. */
  previousContext?: any;
  /** Context for the next element */
  nextContext?: any;
}

/**
 * Function mapping an element in `list` and its surrounding context to
 * contextual data for the element's `mapDataToContext` function.
 */
export type TMapDataToContextFn<
  T extends keyof TMap,
  TMap extends Record<string, React.ComponentType>,
  TData,
  TMeta,
  TContext
> = (ctx: TCtx<T, TMap, TData, TMeta>) => TContext;

/**
 * Function mapping an element in `list` and its surrounding context to props
 * for the component to be rendered.
 */
export type TMapDataToPropsFn<
  T extends keyof TMap,
  TMap extends Record<string, React.ComponentType>,
  TData,
  TMeta,
  TContext
> = (
  ctx: TCtxWithContext<T, TMap, TData, TMeta, TContext>
) => Record<string, any>;

export interface MapComponentsProps<
  TMap extends Record<string, React.ComponentType> = Record<
    string,
    React.ComponentType
  >,
  TData = any,
  TMeta = any,
  TContext = any,
  TDefaultProps = any
> {
  /** Function that maps an element to a unique key. */
  getKey: (data: TData, index: number, list: TData[]) => React.Key;

  /** Function that maps an element to a type. */
  getType: (data: TData, index: number, list: TData[]) => keyof TMap;

  /** List of data to map to components. Can contain mixed types. */
  list?: TData[];

  /** Object mapping a data type to a React component to be rendered. */
  map: TMap;

  /**
   * Arbitrary data that is made available to functions in `mapDataToProps` and
   * `mapDataToProps`.
   * */
  meta?: TMeta;

  /**
   * Function mapping an element in `list` and its surrounding context to
   * contextual data for the element's `mapDataToContext` function.
   */
  mapDataToContext?: {
    [T in keyof TMap]?: TMapDataToContextFn<T, TMap, TData, TMeta, TContext>;
  };

  /**
   * Function mapping an element in `list` and its surrounding context to props
   * for the component to be rendered.
   */
  mapDataToProps?: {
    [T in keyof TMap]?: TMapDataToPropsFn<T, TMap, TData, TMeta, TContext>;
  };

  /** Component to be rendered if an element type is not defined in `map`. */
  default?: React.ComponentType<TDefaultProps>;

  /**Function used to determine context for a type not defined in `mapDataToContext`. */
  defaultMapDataToContext?: TMapDataToContextFn<
    keyof TMap,
    TMap,
    TData,
    TMeta,
    TContext
  >;

  /** Function used to determine props for a type not defined in `mapDataToProps`. */
  defaultMapDataToProps?: TMapDataToPropsFn<
    keyof TMap,
    TMap,
    TData,
    TMeta,
    TContext
  >;
}

export const MapComponents = <
  TMap extends Record<string, React.ComponentType>,
  TData,
  TMeta,
  TContext
>(
  props: MapComponentsProps<TMap, TData, TMeta, TContext>
): React.ReactElement => {
  const {
    getKey,
    getType,
    list = [],
    map,
    meta,
    mapDataToContext,
    mapDataToProps,
    default: defaultMapping = DefaultComp,
    defaultMapDataToContext,
    defaultMapDataToProps,
  } = props;

  const keys = React.useMemo(() => list.map(getKey), [list, getKey]);
  const types = React.useMemo(() => list.map(getType), [list, getType]);
  const comps = React.useMemo(
    () => types.map((type) => map[type] ?? defaultMapping),
    [types, map, defaultMapping]
  );

  const gatherData = React.useCallback(
    (index: number): TCtx<keyof TMap, TMap, TData, TMeta> => ({
      list,
      keys,
      types,
      comps,
      map,
      meta,
      index,
      data: list[index],
      key: keys[index],
      type: types[index],
      Comp: comps[index],
      previousData: list[index - 1],
      previousKey: keys[index - 1],
      previousType: types[index - 1],
      PreviousComp: comps[index - 1],
      nextData: list[index + 1],
      nextKey: keys[index + 1],
      nextType: types[index + 1],
      NextComp: comps[index + 1],
    }),
    [comps, keys, types, meta, list, map]
  );

  const contexts = React.useMemo(
    () =>
      list.map((_, index) => {
        const fn = mapDataToContext?.[types[index]] ?? defaultMapDataToContext;

        return fn ? fn(gatherData(index)) : undefined;
      }),
    [gatherData, list, mapDataToContext, types, defaultMapDataToContext]
  );

  const gatherDataForMapDataToProps = React.useCallback(
    (
      index: number
    ): TCtxWithContext<keyof TMap, TMap, TData, TMeta, TContext> => ({
      ...gatherData(index),
      contexts,
      context: contexts[index],
      previousContext: contexts[index - 1],
      nextContext: contexts[index + 1],
    }),
    [gatherData, contexts]
  );

  const propsList = React.useMemo(
    () =>
      list.map((_, index) => {
        const fn = mapDataToProps?.[types[index]] ?? defaultMapDataToProps;

        return fn ? fn(gatherDataForMapDataToProps(index)) : undefined;
      }),
    [
      gatherDataForMapDataToProps,
      list,
      mapDataToProps,
      types,
      defaultMapDataToProps,
    ]
  );

  return React.createElement(
    React.Fragment,
    null,
    propsList.map((mappedProps, index) => {
      const comp = comps[index];
      const type = types[index];
      const isDefault = comp === defaultMapping;

      return React.createElement(
        comp,
        Object.assign(
          { key: keys[index], ...mappedProps },
          isDefault ? { type } : undefined
        )
      );
    })
  );
};
