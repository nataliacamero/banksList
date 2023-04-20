import {BANKS_INFO_URL} from './constants';

export const getBanksInfo = async () => {
  try {
    const response = await fetch(BANKS_INFO_URL);
    const data = await response?.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching Banks Info data');
  }
};

export default getBanksInfo;
