interface PriceItem {
  currency: String,
  amount: Number,
  decimals: Number,
}

export interface Item {
  id: String,
  bread: Array<Object>,
  title: String,
  price: PriceItem,
  picture: String,
  condition: String,
  free_shipping: Boolean,
}

interface Author {
  name: String,
  lastName: String,
}

export interface BreadItem {
  category_id: String,
  breadCrumb: Array<Object>
}

export interface Items {
  author: Author,
  items: Array<Item>
}

export interface ItemDetail {
  author: Author, 
  item: {
    id: String,
    title: String, 
    price: PriceItem,
    picture: String, 
    condition: String, 
    free_shipping: Boolean, 
    sold_quantity: Number,
    description: String,
  }
}
