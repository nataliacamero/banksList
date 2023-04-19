import {ReactNode} from 'react';

export interface IResponse {
  age: number;
  bankName: string;
  description: string;
  url: string;
  id: string;
}

export interface IContextprops {
  banksInfo: IResponse[];
  setBanksInfo: React.Dispatch<React.SetStateAction<IResponse[]>>;
}

export interface IContextProvider {
  children: ReactNode;
}
