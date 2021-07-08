
fetch('/api/storefront/cart?include=lineItems.digitalItems.options,lineItems.physicalItems.options', {
  credentials: 'same-origin'}
     )
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  }); 
    
