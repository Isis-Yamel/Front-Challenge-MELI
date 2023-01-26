import ItemResults from '@/components/ItemResults';
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
    <ItemResults data={data.items}/>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/api/items?q=:query');

  const data = await res.json();

  return {
    props: {
      data
    },
  };
};
