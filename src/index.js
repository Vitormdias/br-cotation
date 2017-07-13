const Client = require('node-rest-client').Client;

const client = new Client();
let myCotation

let cotation = (currency, cb) => {
  client.get("http://api.promasters.net.br/cotacao/v1/valores", function (data, response) {
    cotations = data
    cb(cotations["valores"][currency]["valor"])
  })

  return myCotation
}

console.log(cotation("USD", function(v) {
  myCotation = v
}))