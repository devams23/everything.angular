

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true }
];

const products = [
    { id: 1, name: "Laptop", price: 800, category: "electronics" },
    { id: 2, name: "Phone", price: 500, category: "electronics" }
];

const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 200 },
  { id: 3, total: 150 }
];

const orders_status = [
  { id: 1, status: "pending" },
  { id: 2, status: "completed" },
  { id: 3, status: "pending" }
];

const users_dups = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];
function GetActiveUsers(userss) {
    
    return userss.filter(user => user.isActive === true)
}
function GetValidData(productss) {

    return productss.map((product)=>{
        const {id , name , price} = product;
        return {id , name , price};
    });
}

function CalculateRevenue(orders) {
    return orders.reduce(( accum , current,) => {return accum + current.total } , 0);
}

function FilterOrderStatus(orders_status) {
    
    let filter_orders  = {pending:[] , completed:[]};


    filter_orders = orders_status.reduce((acc, current)=>{ acc[current.status].push(current); return acc;  },filter_orders)


    //console.log(orders_status);
    // orders_status.forEach(element => {

    //         filter_orders[element.status].push(element);

    // });
    return filter_orders;
}
function RemoveDuplicateUsers(users_dups) {
    return [...new Map(users_dups.map(user=>[user.id, user])).values()];
    // users_dups.forEach(element => {
    //     users_unique.add(element.id, element.name);
    // });
    // return users_unique;
}
const activeUsers = GetActiveUsers(users);
console.log(activeUsers);

const simpleProducts = GetValidData(products);

console.log(simpleProducts);

const totalrevenue = CalculateRevenue(orders);
console.log(totalrevenue);


const filter_orders = FilterOrderStatus(orders_status);
console.log(filter_orders);

const users_unique = RemoveDuplicateUsers(users_dups);
console.log(users_unique);


async function fetchUser() {
  throw new Error("error while fetchind data");
}
async function fetchUserData() {
    let userdataresponse = {data:null, error:null};
    try {
        let userdata = await fetchUser();
        userdataresponse['data'] = userdata;
        userdataresponse['error'] = null;

    } catch (error) {
        userdataresponse['data'] = null;
        userdataresponse['error'] = error.message;
    }
    return userdataresponse;
}

let response = await fetchUserData();
console.log(response);
console.log("response is pending");