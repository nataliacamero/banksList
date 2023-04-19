import {SetStateAction, useEffect, useState} from 'react';
import {addIdPropertyToBankInfo} from '../../utils/functions';
import {IResponse} from '../../context/types';

const useTransformGetData = (data: IResponse[]) => {
  const [banksdata, setBanksData] = useState<IResponse[]>([]);
  useEffect(() => {
    if (banksdata.length < 0) setBanksData(addIdPropertyToBankInfo(data));
  }, [banksdata, data]);

  return {banksdata};
};

export default useTransformGetData;
