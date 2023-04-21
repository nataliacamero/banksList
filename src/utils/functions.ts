import {IResponse} from '../context/types';

export const generateId: () => string = () => {
  let timestamp = Date.now();
  let randomNum = Math.floor(Math.random() * 1000000);
  return `${timestamp}${randomNum}`;
};

export const addIdPropertyToBankInfo = (data: IResponse[]): IResponse[] => {
  let transformedData =
    data &&
    data.map((item: IResponse) => {
      item.id = generateId();

      return item;
    });
  return transformedData;
};
