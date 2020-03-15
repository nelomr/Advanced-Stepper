export default function(data) {
    let productsModel = [];

    data.forEach((product) => {
        let productObject = {};

        productObject.id = product.id;
        productObject.name = product.name;
        productObject.price = product.price;

        productsModel.push(productObject);
    });
    return productsModel;
}
