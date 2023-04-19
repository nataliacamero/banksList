import React, {createContext, useEffect, useState} from 'react';
import {IContextprops, IContextProvider, IResponse} from './types';
import getBanksInfo from '../services/getBanksInfo';
import {generateId} from '../utils/functions';
import useTransformGetData from '../hooks/customeHooks/useTransformGetData';

export const Context = createContext<IContextprops>({
  banksInfo: [],
  setBanksInfo: () => [],
});

export const ContextProvider: React.FC<IContextProvider> = ({children}) => {
  const [banksInfo, setBanksInfo] = useState<IContextprops['banksInfo']>([]);

  useEffect(() => {
    if (banksInfo.length < 0) {
      getBanksInfo()
        .then(getData => {
          setBanksInfo(() => useTransformGetData(getData));
        })
        .catch((error: {message: string}) => console.error(error.message));
    }
  }, [banksInfo]);

  return (
    <Context.Provider
      value={{
        banksInfo,
        setBanksInfo,
      }}>
      {children}
    </Context.Provider>
  );
};
