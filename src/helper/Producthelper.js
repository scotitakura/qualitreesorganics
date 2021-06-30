import products from "../data/shop.json";

function getProduct(id) {
    return products.filter(product => { return product.id === parseInt(id) })[0];
}
function getFilteredPosts(products, filter = { cat:'' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    if (catgoryFilter) {
        products = products.filter(product => {
            return (product.category !== undefined && product.category !== null) && product.category.includes(parseInt(filter.cat))
        })
    }

    return products;
}

export { getProduct, getFilteredPosts };
