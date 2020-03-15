export default function(data) {
    let ordersModel = [];

    data.forEach((order) => {
        let orderObject = {};
        let listData = order.productsOrder;

        orderObject.code = order.code;
        orderObject.orderDate = order.orderDate;
        orderObject.id = order.id;
        orderObject.logisticCode = order.logistics.code;
        orderObject.cuponId = order.cuponId || '';
        orderObject.totalPrice = order.totalPrice;
        orderObject.totalDeliveryPrice = order.totalDeliveryPrice;
        orderObject.productsOrder = [];

        listData.forEach((productData) => {
            let productObject = {};

            productObject.productId = productData.productId;
            productObject.quantity = productData.quantity;

            orderObject.productsOrder.push(productObject);
        });
        ordersModel.push(orderObject);
    });
    return ordersModel;
}
