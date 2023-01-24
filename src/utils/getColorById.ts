import { OPTION_VALUES } from 'constants/products';

const capitalize = (string: string = '') =>
  string[0]?.toUpperCase?.() + string?.slice(1);

export const getColorById = (colorId: string) => {
  const foundOptionValue = OPTION_VALUES.find(value => value.id === colorId);
  const optionName = capitalize(
    foundOptionValue?.attributes.name || ''
  ).replace('_', ' ');

  return optionName;
};
