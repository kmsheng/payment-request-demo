if (window.PaymentRequest) {

  const messageBoard = document.getElementById('message-board');
  const btnPaymentRequest = document.getElementById('btn-payment-request');

  const supportedPaymentMethods = [{
    supportedMethods: ['basic-card'],
    data: {
      supportedNetworks: ['visa', 'mastercard']
    }
  }];
  const paymentDetails = {
    total: {
      label: 'Total',
      amount:{
        currency: 'TWD',
        value: 100
      }
    }
  };
  const options = {};

  const request = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

  btnPaymentRequest.addEventListener('click', () => {
    request.show()
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        if (err && err.message) {
          messageBoard.innerText = err.message;
        }
      });
  }, false);
}
else {
  // fallback to traditional checkout
  window.location.href = '/payment-request-demo/fallback.html';
}
