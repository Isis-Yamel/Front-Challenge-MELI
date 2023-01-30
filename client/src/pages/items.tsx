import React, { useContext } from 'react';
import ItemResults from '@/components/ItemResults';
import BreadCrumb from '@/components/BreadCrumb';
import { StoreContext } from '@/store/store';
import { DataContext } from '@/types/itemTypes';

const Items = () => {
  const { data } = useContext(StoreContext) as DataContext;
  
  return (
    <>
      <BreadCrumb breadcrumbs={data.items[0].breadCrumb}/>
      <ItemResults data={data.items}/>
    </>
  );
};

export default Items;
