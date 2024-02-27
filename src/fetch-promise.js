const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  // this happens asynch too 
  // ater the pending is completed the below codes runs 
  fetchPromise.then((response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
  });
  
  console.log("Started request…");
  
  // fetch will execute sync execution 