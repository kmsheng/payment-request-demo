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
  const options = {
    requestPayerName: true,
    requestPayerPhone: true
  };

  const request = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

  btnPaymentRequest.addEventListener('click', () => {
    request.show()
      .then((res) => {
        messageBoard.className = '';
        messageBoard.innerText = JSON.stringify(res, null, 2);
      })
      .catch((err) => {
        if (err && err.message) {
          messageBoard.className = 'danger';
          messageBoard.innerText = err.message;
        }
      });
  }, false);
}
else {
  // fallback to traditional checkout
  window.location.href = '/payment-request-demo/fallback.html';
}
