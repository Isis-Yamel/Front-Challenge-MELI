interface Category {
  id: String,
  name: String,
  results: Number,
}

interface Categories {
  id: String,
  name: String,
  type: String,
  values: Array<Category>
}

const filterCategories = (categories: Categories) => {
  return categories.values.map(i => i.name)
}

export const searchAPIFormatter = (data: any) => {
  return {
    author: 'Isis Salamanca',
    items: data.results.slice(0, 4),
    categories: filterCategories(data.available_filters.find((i: { id: string; }) => i.id === 'category')),
  }
};
