import React, {createContext, useState} from "react";
import { DataContext } from '@/types/itemTypes';

type Props = {
  children: JSX.Element,
};

export const StoreContext = createContext<DataContext | null>(null);

export const ContextProvider = ({children}: Props) => {
  const [data, setData] = useState<Array<Object>>([]);
  const [token, setToken] = useState<Object>({});

  return (
    <StoreContext.Provider value={{data, setData, token, setToken}}>
      {children}
    </StoreContext.Provider>
  )
};
