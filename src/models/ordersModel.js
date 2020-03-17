export default function(data) {
    let ordersModel = [];

    data.forEach((orderData) => {
        let orderObject = {};
        let listData = orderData.productsOrder;
        let visitsData = orderData.visits;

        orderObject.code = orderData.code;
        orderObject.orderDate = orderData.orderDate;
        orderObject.id = orderData.id;
        orderObject.logisticCode = orderData.orderStatus.code;
        orderObject.cuponId = orderData.cuponId || '';
        orderObject.totalPrice = orderData.totalPrice;
        orderObject.totalDeliveryPrice = orderData.totalDeliveryPrice;
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
