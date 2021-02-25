export const getProductsState = store => store.productsReducer;

export const getProductsBrand = store => getProductsState(store).brands;