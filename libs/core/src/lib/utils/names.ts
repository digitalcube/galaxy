type Initials = {
  name: string;
};

export const initials = ({ name }: Initials) => {
  return name
    .replace(/[^a-zA-Z- ]/g, '')
    .match(/\b\w/g)
    .join('')
    .toUpperCase()
    .substring(0, 2);
};
