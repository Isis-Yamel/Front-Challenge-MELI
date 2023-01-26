import ItemDetail from './ItemDetail';
import itemStyle from '@/styles/Item.module.scss';
import { Item } from '@/types/itemTypes';

type Props = {
  data: Array<Item>,
};

const ItemResults = ({data}: Props) => {
  return (
    <section className={itemStyle.item__wrapper}>
      {data.map((item) => (
        <ItemDetail 
          key={item.id} 
          item={item}/>
      ))}
    </section>
  );
};

export default ItemResults;
