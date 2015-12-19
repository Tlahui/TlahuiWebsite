Conekta.setPublishableKey("key_Kzzgi62PkmaZufFM7AHFzbw");

var errorResponseHandler, successResponseHandler, tokenParams;
tokenParams = {
    "card": {
        "number": "4242424242424242",
        "name": "Javier Pedreiro",
        "exp_year": "2019",
        "exp_month": "12",
        "cvc": "123"
    }
};

/* Después de tener una respuesta exitosa, envía la información al servidor */

successResponseHandler = function(token) {
    console.log(token);
    // return $.post('/process_payment?token_id=' + token.id, function() {
    //   return document.location = 'payment_succeeded';
    // });
};

/* Después de recibir un error */

errorResponseHandler = function(error) {
    return console.log(error.message);
};

/* Tokenizar una tarjeta en Conekta */
function createToken()
{
    Conekta.token.create(tokenParams, successResponseHandler, errorResponseHandler);
}
