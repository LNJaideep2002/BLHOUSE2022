const Homeapi = async () => {
    const response = await fetch('http://localhost:6500/home');
    const data = await response.json();
    return data;
}
const Signupapi = async (value) => {
    const response = await fetch('http://localhost:6500/signup', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Loginapi = async (value) => {
    const response = await fetch('http://localhost:6500/login', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const EditprofileApi = async (value) => {
    const response = await fetch('http://localhost:6500/edit', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const EditaddressApi = async (value) => {
    const response = await fetch('http://localhost:6500/editaddress', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Wishlistapi = async (value) => {
    const response = await fetch('http://localhost:6500/wishlist', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Heartstatus = (card, wishlist) => {
    for (var i = 0; i < wishlist.length; i++) {

        if (wishlist[i] === null)
            return 0
        if (wishlist[i].type == card.type && wishlist[i].ID == card.ID) {
            return 1;
        }
    }
}
const Editwishlistapi = async (value) => {
    const response = await fetch('http://localhost:6500/editwishlist', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Getdataapi = async (value) => {
    const response = await fetch('http://localhost:6500/getdata', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Getcartapi = async (value) => {
    const response = await fetch('http://localhost:6500/cart', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Deletecartapi = async (value) => {
    const response = await fetch('http://localhost:6500/delcart', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const EditCartapi = async (value) => {
    const response = await fetch('http://localhost:6500/editcart', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Getproductdetailapi = async (value) => {
    const response = await fetch('http://localhost:6500/product', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const addwishlistapi = async (value) => {
    const response = await fetch('http://localhost:6500/addwishlist', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const NewBagapi = async (value) => {
    const response = await fetch('http://localhost:6500/newbag', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const EditBagapi = async (value) => {
    const response = await fetch('http://localhost:6500/editbagitem', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const GetSleeveapi = async () => {
    const response = await fetch('http://localhost:6500/sleeves');
    const data = await response.json();
    return data;
}
const AddAddressapi = async (value) => {
    const response = await fetch('http://localhost:6500/addadress', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Ordersapi = async (value) => {
    const response = await fetch('http://localhost:6500/order', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Paymentapi = async (value) => {
    const response = await fetch('http://localhost:6500/verify', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const Successpaymentapi = async (value) => {
    const response = await fetch('http://localhost:6500/paymentsuccess', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
const CompanyOrdersapi = async (value) => {
    const response = await fetch('http://localhost:6500/companyOrder', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}
export { Homeapi, CompanyOrdersapi, Signupapi, Successpaymentapi, Paymentapi, Ordersapi, GetSleeveapi, AddAddressapi, EditBagapi, NewBagapi, Loginapi, addwishlistapi, Getproductdetailapi, EditCartapi, EditprofileApi, Getcartapi, EditaddressApi, Wishlistapi, Heartstatus, Editwishlistapi, Getdataapi, Deletecartapi }

