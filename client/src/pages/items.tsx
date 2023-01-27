import React, { useContext } from 'react';
import ItemResults from '@/components/ItemResults';
import BreadCrumb from '@/components/BreadCrumb';
import { SearchData } from '@/store/store';
import { DataContext } from '@/types/itemTypes';

const Items = () => {
  const { data } = useContext(SearchData) as DataContext;
  
  return (
    <>
      <BreadCrumb breadcrumbs={data.items[0]}/>
      <ItemResults data={data.items}/>
    </>
  );
};

export default Items;
