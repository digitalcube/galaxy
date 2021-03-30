export type ProgressClassTypes = {
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

export const progressClass = ({ progress }: ProgressClassTypes) => {
  if (!progress) return '';
  return `w-${progress}/5`;
};

progressClass.defaultProps = {
  progress: null,
};
