import {ImageDimensions} from './types';

export const customeDimensionsLogo = (itemName: string): ImageDimensions => {
  const customeHeight = itemName === 'Banregio' ? 80 : 120;
  return {
    width: 160,
    height: customeHeight,
  };
};
