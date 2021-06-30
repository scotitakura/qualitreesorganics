import strains from "../data/strain.json";

function getProduct(id) {
    return strains.filter(strain => { return strain.id === parseInt(id) })[0];
}

export { getProduct };