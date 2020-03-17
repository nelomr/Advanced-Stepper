export default function(data) {
    let ordersModel = [];

    data.forEach((order) => {
        let orderObject = {};
        let listData = order.productsOrder;
        let visitsData = order.visits;

        orderObject.code = order.code;
        orderObject.orderDate = order.orderDate;
        orderObject.id = order.id;
        orderObject.logisticCode = order.logistics.code;
        orderObject.cuponId = order.cuponId || '';
        orderObject.totalPrice = order.totalPrice;
        orderObject.totalDeliveryPrice = order.totalDeliveryPrice;
        orderObject.productsOrder = [];
        orderObject.pickupDates = [];

        listData.forEach((productData) => {
            let productObject = {};

            productObject.productId = productData.productId;
            productObject.quantity = productData.quantity;

            orderObject.productsOrder.push(productObject);
        });

        visitsData.forEach((visitData) => {
            let pickupObject = {};

            pickupObject.id = visitData.id;
            pickupObject.pickupDate = visitData.date;
            pickupObject.pickupStart = visitData.timeSlotStart;
            pickupObject.pickupEnd = visitData.timeSlotEnd;

            orderObject.pickupDates.push(pickupObject);
        });
        ordersModel.push(orderObject);
    });
    return ordersModel;
}
