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
