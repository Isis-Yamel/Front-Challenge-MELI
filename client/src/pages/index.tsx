import ItemResults from '@/components/ItemResults';
import BreadCrumb from '@/components/BreadCrumb';
import {Item, Author} from '@/types/itemTypes';

type Props = {
  data: {
    author: Author,
    items: Array<Item>,
    categories: Array<String>,
  },
};

export default function Home({data}: Props) { 
  return (
    <>
      <BreadCrumb breadcrumbs={data}/>
      <ItemResults data={data.items}/>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/api/items?q=:query', {
    headers: {
      "Content-type": "application/json; charset=UTF-8", 
      "Authorization": `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      data
    },
  };
};
