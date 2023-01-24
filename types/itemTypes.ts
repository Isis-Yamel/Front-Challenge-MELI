interface PriceItem {
  currency: String,
  amount: Number,
  decimals: Number,
}

export interface Item {
  id: String,
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

export interface Items {
  author: Author,
  categories: Array<String>,
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
