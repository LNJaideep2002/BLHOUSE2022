import { createStore } from "redux";
const Inital = {
    login: 0,
    ID: null,
    name: null,
    email: null,
    phone: null,
    bag: null,
    orders: null,
    wishlist: null,
    address: null,
    currentbag: {
        st: null,
        name: null,
        ID: null
    }
}
const Debugbag = (value) => {
    console.log(value.split("$"));
    const data = value.split("$");
    console.log(data);
    if (data[0] === 'undefined') {
        console.log("checked");
        return [];
    }
    const data1 = data.map((val) => {
        if (val.length > 5) {
            const name = val.split("@")[0];
            const date = val.split("@")[1];
            const price = val.split("@")[2];
            console.log(val.split("@")[3]);
            if (val.split("@")[3] === undefined) {
                return {
                    price,
                    date,
                    name,
                    products: []
                }
            }
            var product = val.split("@")[3].split(",").map((val1) => {
                return {
                    type: val1.split("#")[0],
                    ID: val1.split("#")[1]
                }
            });
            if (product[0].type === '')
                product = [];
            return {
                price,
                date,
                name,
                products: product
            }
        }
    })
    return data1;
}
const Debugorder = (value) => {
    var finalorder = []
    var order = value.split("$");
    for (var i = 0; i < order.length; i++) {
        finalorder.push(order[i].split("&")[1])
    }
    return finalorder.join("$")
}
const Reducer = (state = Inital, action) => {
    if (action.type === "login") {
        const bag = Debugbag(action.payload.bag);
        const orders = Debugbag(Debugorder(action.payload.orders));
        const wishlist = action.payload.wishlist.split(",").map((val) => {
            return {
                type: val.split("#")[0],
                ID: val.split("#")[1]
            }
        })
        const address = action.payload.address.split("$").map((val) => {
            return {
                ID: Number(val.split("#")[0]),
                address: val.split("#")[1]
            }
        });
        console.log(address);
        return {
            ...state,
            login: 1,
            ...action.payload,
            bag,
            orders,
            wishlist,
            address,
        }
    }
    if (action.type === "update") {
        return {
            ...state,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone
        }
    }
    if (action.type === "address") {
        console.log("coming");
        return {
            ...state,
            address: action.payload
        }
    }
    if (action.type === "editwishlist") {
        return {
            ...state,
            wishlist: action.payload
        }
    }
    if (action.type === "deletebag") {
        const bag = Debugbag(action.payload);
        return {
            ...state,
            bag
        }
    }
    if (action.type === "currentbag") {
        console.log(action.payload);
        return {
            ...state,
            currentbag: action.payload
        }
    }
    if (action.type === "addaddress") {
        const address = action.payload.address.split("$").map((val) => {
            return {
                ID: Number(val.split("#")[0]),
                address: val.split("#")[1]
            }
        });
        return {
            ...state,
            address
        }
    }
    if (action.type === "curaddress") {
        var curbag = state.currentbag;

        return {
            ...state,
            currentbag: {
                image: curbag.image,
                st: curbag.st,
                name: curbag.name,
                ID: curbag.ID,
                addID: action.payload.ID
            }
        }
    }
    if (action.type === "resetcurbag") {
        return {
            ...state,
            currentbag: {
                st: null,
                name: null,
                ID: null
            }
        }
    }
    if (action.type === "logout") {
        return Inital;
    }
    return state;
};
const store = createStore(Reducer);
export default store;