var expectedObj = 
{
    name: "sidik hadiwijaya",
    orderNumber: "76542019",
    courier: "JNE",
    product:[
        {
            item: "laptop asus",
            price: 12000000
        },
        {
            item: "laptop caer",
            price: 10000000 
        },
                {
            item: "Macbook pro",
            price: 30000000
        }
    ],
    total: 20000000,
    code: 200,
    success: true
}

pm.test('a. assertion total', function(){

    //hitung semua total price
    var totalhitung = expectedObj.product[0].price + expectedObj.product[1].price + expectedObj.product[2].price
    pm.globals.set('totalPrice', totalhitung); //set to global variable
    console.log(pm.globals.get('totalPrice'));//cek udah global variable

    //validasi total price
    pm.expect(expectedObj.total).to.equals(pm.globals.get('totalPrice'));
    
});

pm.test('b. validation type data on orderNumber', function(){
    
    //validation type data order number
    pm.expect(expectedObj.orderNumber).to.be.a('number') //integer
})