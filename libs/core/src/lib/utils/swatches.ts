type Swatches = {
  data: Record<string, string>;
  token: string;
  className?: string;
};

export const swatches = ({
  data = {},
  className = ``,
  token = ``,
}: Swatches) => {
  return Object.entries(data).map((data, i) => {
    const key = data[0];
    const value = data.length > 0 ? data[1] : null;
    const tokenClassName = key === `DEFAULT` ? `${token}` : `${token}-${key}`;
    const swatch = { key, value, className, tokenClassName };
    return swatch;
  });
};
