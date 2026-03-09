function memoize(fetchProduct) {
  let userMap = new Map();
  return (id)=>{
    if (userMap.has(id)) {
      console.log(`getting data for userid ${id} from cache`)
      return userMap.get(id);
    }
    else{
      
      const data =  fetchProduct(id);

      console.log(data)
      userMap.set(id, data);
      return data;
    }
  }
}

function fetchUserdata(id) {
  return `data for userid ${id}`
}
const getProduct = memoize(fetchUserdata);
getProduct(10);
getProduct(10);
getProduct(100);
getProduct(170);
getProduct(170);
getProduct(180);



