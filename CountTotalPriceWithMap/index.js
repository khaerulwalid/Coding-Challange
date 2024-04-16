let obj = [
    {
        name: "Laptop",
        price: 5000,
        qty: 5
    },
    {
        name: "Desktop",
        price: 4000,
        qty: 8
    },
    {
        name: "Smartphone",
        price: 2000,
        qty: 10
    }
]

let newObj = obj.map(item => {
    return {
        name: item.name,
        totalPrice: item.price * item.qty
    }
})

console.log(newObj);