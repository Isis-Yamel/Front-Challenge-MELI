import Image from 'next/image';
import itemStyle from '@/styles/ItemId.module.scss';
type Price = {
  currency: string,
  amount: number,
  decimals: number,
}
type Props = {
  data: {
    author: string,
    item: {
      id: string,
      title: string,
      price: Price,
      picture: string,
      condition: string,
      free_shipping: boolean,
      sold_quantity: number,
      description: string,
    }
  }
};

const Item = ({data: {item}}: Props) => {
  return (
    <div className={itemStyle.itemDetail__container}>
      <Image
        className={itemStyle.itemDetail__image}
        src={item.picture}
        alt={item.title}
        width={180}
        height={150}
      />
      <div>
        <p>{item.condition}</p>
        <h2>{item.title}</h2>
        <p>{item.price.decimals}</p>
        <button>Comprar</button>
      </div>
      <div className={itemStyle.itemDetail__description}>
        <h2 className={itemStyle.itemDetail__description__title}>
          Descripcion del Producto
        </h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Item;

// I use serverSideProps as I am storing items in client side
export const getServerSideProps = async (context: any) => {
  const res = await fetch(`http://localhost:8000/api/items/${context.params.id}`, {
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
  }
};
