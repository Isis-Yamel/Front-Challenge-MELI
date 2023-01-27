import React, {createContext, SetStateAction, useState} from "react";

type Props = {
  children: JSX.Element,
};

interface DataContext {
  data: Array<Object>,
  setData: React.Dispatch<SetStateAction<Object[]>>;
}

export const SearchData = createContext<DataContext | null>(null);


export const Context = ({children}: Props) => {
  const [data, setData] = useState<Array<Object>>([{name: 'Test'}]);

  return (
    <SearchData.Provider value={{data, setData}}>
      {children}
    </SearchData.Provider>
  )
};
