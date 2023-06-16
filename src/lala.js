const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, (paymentInfo) => {
    OrderSummary(paymentInfo, () => {
        updateBalance()
    });
  });
});


 createOrder(item).then(orderId=>proceedToPayment(orderId))
 .then((paymentInfo)=>(
OrderSummary(paymentInfo)
 )).then(()=>(updateBalance))