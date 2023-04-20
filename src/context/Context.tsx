import React, {createContext, useCallback, useEffect, useState} from 'react';
import {IContextprops, IContextProvider} from './types';
import getBanksInfo from '../services/getBanksInfo';

export const Context = createContext<IContextprops>({
  banksInfo: [],
  setBanksInfo: () => [],
});

export const ContextProvider: React.FC<IContextProvider> = ({children}) => {
  const [banksInfo, setBanksInfo] = useState<IContextprops['banksInfo']>([]);

  const fetchBanksInfo = useCallback(() => {
    if (banksInfo.length <= 0) {
      getBanksInfo()
        .then(getData => {
          setBanksInfo(getData);
        })
        .catch((error: {message: string}) => console.error(error.message));
    }
  }, [banksInfo]);

  useEffect(() => {
    fetchBanksInfo();
  }, [fetchBanksInfo]);

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
