import { SetStateAction} from "react";

export interface Item {
  id: string,
  title: string,
  price: number,
  picture: string,
  condition: string,
  free_shipping: boolean,
}

export interface Author {
  name: string,
  lastName: string,
}

export interface DataContext {
  data: any,
  setData: React.Dispatch<SetStateAction<Object[]>>,
  token: any,
  setToken: React.Dispatch<SetStateAction<Object[]>>,
}