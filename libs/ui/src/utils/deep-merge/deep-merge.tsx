/**
 * Check if item is Object
 */
function IsObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @return merged object
 */
export function DeepMerge(target: any, ...sources: any[]): any {
  if (sources.length === 0) return target;
  const source = sources.shift();

  if (IsObject(target) && IsObject(source)) {
    for (const key in source) {
      if (IsObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        DeepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return DeepMerge(target, ...sources);
}
