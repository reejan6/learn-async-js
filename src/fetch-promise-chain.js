const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  // note: chained then block
  fetchPromise
    .then((response) => response.json())
    // object retrieved from response.json() as it returns a promise which is being used as products
    // anything runing with then is running asycho 
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  