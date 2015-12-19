Conekta.setPublishableKey("key_Kzzgi62PkmaZufFM7AHFzbw");


/* Los parámetros pueden ser un objeto de javascript, una forma de HTML o una forma de JQuery */

var errorResponseHandler, successResponseHandler, tokenParams;
tokenParams = {
  "card": {
    "number": "4242424242424242",
    "name": "Javier Pedreiro",
    "exp_year": "2018",
    "exp_month": "12",
    "cvc": "123"
  }
};

/* Después de tener una respuesta exitosa, envía la información al servidor */

successResponseHandler = function(token) {
  /*return $.post('/process_payment?token_id=' + token.id, function() {
    return document.location = 'payment_succeeded';
  });*/
  console.log(token);
};

/* Después de recibir un error */

errorResponseHandler = function(error) {
  return console.log(error.message);
};

/* Tokenizar una tarjeta en Conekta */

function createToken(){
  Conekta.token.create(tokenParams, successResponseHandler, errorResponseHandler);
}

