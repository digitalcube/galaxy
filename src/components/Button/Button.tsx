import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { components, colors } from '../../styles';

export type Button = {
  children?: ReactNode;
  href?: string;
  active?: boolean;
  hover?: boolean;
  mode?: 'light' | 'dark';
  schema?: 'amimoto' | 'shifter' | 'galaxy';
  kind?: 'primary' | 'success' | 'ghost';
  outline?: boolean;
  as?: `a` | `button`;
  size?: `lg` | `sm`;
};

const backgroundColor = ({
  schema = `galaxy`,
  outline = false,
  hover = false,
}: Button) => {
  // Outline
  if (outline === true) {
    // Outline / Hover
    if (hover === true) {
      if (schema === `galaxy`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.galaxy.black,
            dark: colors.galaxy.white,
          },
          success: {
            light: colors.galaxy.success,
            dark: colors.galaxy.success,
          },
        });
      if (schema === `shifter`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.shifter.purple.primary,
            dark: colors.shifter.purple.primary,
          },
          success: {
            light: colors.galaxy.success,
            dark: colors.galaxy.success,
          },
        });
      if (schema === `amimoto`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.amimoto.blue.primary,
            dark: colors.amimoto.blue.primary,
          },
          success: {
            light: colors.galaxy.success,
            dark: colors.galaxy.success,
          },
        });
    }
    // Outline / Initial
    return colors.galaxy.transparent;
  }
  // Initial / Solid / Hover
  if (hover === true) {
    if (schema === `galaxy`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.gray.g700,
          dark: colors.galaxy.gray.g500,
        },
        success: {
          light: colors.galaxy.successDark,
          dark: colors.galaxy.successDark,
        },
      });
    if (schema === `shifter`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.shifter.purple.p500,
          dark: colors.shifter.purple.p500,
        },
        success: {
          light: colors.galaxy.successDark,
          dark: colors.galaxy.successDark,
        },
        ghost: {
          light: colors.shifter.gray.g200,
          dark: colors.shifter.purple.p500,
        },
      });
    if (schema === `amimoto`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.amimoto.blue.b500,
          dark: colors.amimoto.blue.b500,
        },
        success: {
          light: colors.galaxy.successDark,
          dark: colors.galaxy.successDark,
        },
      });
  }

  // Initial / Solid
  if (schema === `galaxy`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.galaxy.black,
        dark: colors.galaxy.white,
      },
      success: {
        light: colors.galaxy.success,
        dark: colors.galaxy.success,
      },
    });
  if (schema === `shifter`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.shifter.purple.primary,
        dark: colors.shifter.purple.primary,
      },
      success: {
        light: colors.galaxy.success,
        dark: colors.galaxy.success,
      },
      ghost: {
        light: colors.galaxy.transparent,
        dark: colors.galaxy.transparent,
      },
    });
  if (schema === `amimoto`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.amimoto.blue.primary,
        dark: colors.amimoto.blue.primary,
      },
      success: {
        light: colors.galaxy.success,
        dark: colors.galaxy.success,
      },
    });

  return;
};

const color = ({
  schema = `galaxy`,
  outline = false,
  hover = false,
}: Button) => {
  // Outline
  if (outline === true) {
    // Outline / Hover
    if (hover === true) {
      if (schema === `galaxy`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.galaxy.white,
            dark: colors.galaxy.black,
          },
          success: {
            light: colors.galaxy.white,
            dark: colors.galaxy.white,
          },
        });
      if (schema === `shifter`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.galaxy.white,
            dark: colors.galaxy.white,
          },
          success: {
            light: colors.galaxy.white,
            dark: colors.galaxy.white,
          },
        });

      if (schema === `amimoto`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.galaxy.white,
            dark: colors.amimoto.blue.b100,
          },
          success: {
            light: colors.galaxy.white,
            dark: colors.galaxy.white,
          },
        });
    }

    if (schema === `galaxy`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.black,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
    if (schema === `shifter`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.shifter.purple.primary,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });

    if (schema === `amimoto`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.amimoto.blue.primary,
          dark: colors.amimoto.blue.b100,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
  }

  // Solid / Hover
  if (hover === true) {
    if (schema === `galaxy`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.white,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.white,
          dark: colors.galaxy.white,
        },
      });
    if (schema === `shifter`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.white,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.white,
          dark: colors.galaxy.white,
        },
      });
    if (schema === `amimoto`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.white,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.white,
          dark: colors.galaxy.white,
        },
      });
  }

  // Solid
  if (schema === `galaxy`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.galaxy.white,
        dark: colors.galaxy.black,
      },
      success: {
        light: colors.galaxy.white,
        dark: colors.galaxy.white,
      },
    });
  if (schema === `shifter`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.galaxy.white,
        dark: colors.galaxy.white,
      },
      success: {
        light: colors.galaxy.white,
        dark: colors.galaxy.white,
      },
    });
  if (schema === `amimoto`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.galaxy.white,
        dark: colors.galaxy.white,
      },
      success: {
        light: colors.galaxy.white,
        dark: colors.galaxy.white,
      },
    });

  return;
};

const borderColor = ({
  schema = `galaxy`,
  outline = false,
  hover = false,
}: Button) => {
  // Outline
  if (outline === true) {
    // Outline / Hover
    if (hover === true) {
      if (schema === `galaxy`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.galaxy.black,
            dark: colors.galaxy.white,
          },
          success: {
            light: colors.galaxy.success,
            dark: colors.galaxy.success,
          },
        });
      if (schema === `shifter`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.shifter.purple.primary,
            dark: colors.shifter.purple.primary,
          },
          success: {
            light: colors.galaxy.success,
            dark: colors.galaxy.success,
          },
        });
      if (schema === `amimoto`)
        return theme.variants('mode', 'kind', {
          primary: {
            light: colors.amimoto.blue.primary,
            dark: colors.amimoto.blue.primary,
          },
          success: {
            light: colors.galaxy.success,
            dark: colors.galaxy.success,
          },
        });
    }

    // Outline / Initial
    if (schema === `galaxy`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.black,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
    if (schema === `shifter`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.shifter.purple.primary,
          dark: colors.shifter.purple.primary,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
    if (schema === `amimoto`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.amimoto.blue.primary,
          dark: colors.amimoto.blue.primary,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
  }

  // Solid / Hover
  if (hover === true) {
    if (schema === `galaxy`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.galaxy.gray.g700,
          dark: colors.galaxy.white,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
    if (schema === `shifter`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.shifter.purple.p500,
          dark: colors.shifter.purple.p500,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
    if (schema === `amimoto`)
      return theme.variants('mode', 'kind', {
        primary: {
          light: colors.amimoto.blue.b500,
          dark: colors.amimoto.blue.b500,
        },
        success: {
          light: colors.galaxy.success,
          dark: colors.galaxy.success,
        },
      });
  }

  // Solid
  if (schema === `galaxy`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.galaxy.black,
        dark: colors.galaxy.white,
      },
      success: {
        light: colors.galaxy.success,
        dark: colors.galaxy.success,
      },
    });
  if (schema === `shifter`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.shifter.purple.primary,
        dark: colors.shifter.purple.primary,
      },
      success: {
        light: colors.galaxy.success,
        dark: colors.galaxy.success,
      },
      ghost: {
        light: colors.galaxy.transparent,
        dark: colors.galaxy.transparent,
      },
    });
  if (schema === `amimoto`)
    return theme.variants('mode', 'kind', {
      primary: {
        light: colors.amimoto.blue.primary,
        dark: colors.amimoto.blue.primary,
      },
      success: {
        light: colors.galaxy.success,
        dark: colors.galaxy.success,
      },
    });

  return;
};

export const Button: FC<Button> = ({
  children,
  as = `a`,
  size = `lg`,
  href,
  kind = `primary`,
  outline,
}: Button) => {
  if (!children) return null;
  return (
    <StyledButton outline={outline} kind={kind} href={href} as={as} size={size}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<Button>`
  background-color: ${props => {
    const { outline } = props;
    const { schema } = props.theme;
    return backgroundColor({ schema: schema, outline: outline });
  }};

  color: ${props => {
    const { outline } = props;
    const { schema } = props.theme;
    return color({ schema: schema, outline: outline });
  }};

  border-color: ${props => {
    const { outline } = props;
    const { schema } = props.theme;
    return borderColor({ schema: schema, outline: outline });
  }};

  border-width: ${components.button.borderWidth};
  border-radius: ${components.borderRadius};
  padding: ${components.button.padding};
  min-height: ${components.button.minHeight};
  min-width: ${components.button.minWidth};
  font-size: ${components.button.fontSize};
  transition: ${components.transition.exit.medium};
  border-style: solid;
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;

  &:hover {
    transition: ${components.transition.entrance.fast};

    background-color: ${props => {
      const { outline } = props;
      const { schema } = props.theme;
      return backgroundColor({
        schema: schema,
        outline: outline,
        hover: true,
      });
    }};

    color: ${props => {
      const { outline } = props;
      const { schema } = props.theme;
      return color({
        schema: schema,
        outline: outline,
        hover: true,
      });
    }};

    border-color: ${props => {
      const { outline } = props;
      const { schema } = props.theme;
      return borderColor({
        schema: schema,
        outline: outline,
        hover: true,
      });
    }};
  }
`;
