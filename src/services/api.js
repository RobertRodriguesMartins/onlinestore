const URL_BASE = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  const categories = await fetch(`${URL_BASE}categories`);
  const categoriesData = await categories.json();
  return categoriesData;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url;
  if (categoryId && query) {
    url = `${URL_BASE}search?category=${categoryId}&q=${query}`;
  } else {
    url = categoryId ? `${URL_BASE}search?category=${categoryId}`
      : `${URL_BASE}search?category=${categoryId}&q=${query}`;
  }
  const products = await fetch(url);
  const productsData = await products.json();
  return productsData;
}
