interface Category {
  id: String,
  name: String,
  results: Number,
}

export interface Categories {
  id: String,
  name: String,
  type: String,
  values: Array<Category>
}
