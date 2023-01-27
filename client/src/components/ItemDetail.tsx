import Image from 'next/image';
import itemStyle from '@/styles/Item.module.scss';
import { Item } from '@/types/itemTypes';

type Props = {
  item: Item
};

const ItemDetail = ({item}: Props) => {
  return (
    <article className={itemStyle.item__container}>
      <Image
        className={itemStyle.item__image}
        src={item.picture}
        alt={item.title}
        width={180}
        height={150}
      />
      <div>
        <p>$ {item.price}</p>
        <h3>{item.title}</h3>
      </div>
      <p>{item.condition}</p>
    </article>
  );
};

export default ItemDetail;
