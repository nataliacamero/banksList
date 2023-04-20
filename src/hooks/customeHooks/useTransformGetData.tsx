import {useContext, useEffect, useState} from 'react';
import {addIdPropertyToBankInfo} from '../../utils/functions';
import {IResponse} from '../../context/types';
import {Context} from '../../context/Context';

const useTransformGetData = () => {
  const {banksInfo} = useContext(Context);
  const [banksData, setBanksData] = useState<IResponse[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (banksData.length === 0) {
          setBanksData(addIdPropertyToBankInfo(banksInfo));
        }
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        //TODO: Ir a una pagina de error
      }
    };

    fetchData();
  }, [banksInfo]);

  return {banksData, isloading, isError};
};

export default useTransformGetData;
