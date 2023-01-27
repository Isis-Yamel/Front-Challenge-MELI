import React, {createContext, useState} from "react";
import { DataContext } from '@/types/itemTypes';

type Props = {
  children: JSX.Element,
};

export const SearchData = createContext<DataContext | null>(null);

export const Context = ({children}: Props) => {
  const [data, setData] = useState<Array<Object>>([]);

  return (
    <SearchData.Provider value={{data, setData}}>
      {children}
    </SearchData.Provider>
  )
};
