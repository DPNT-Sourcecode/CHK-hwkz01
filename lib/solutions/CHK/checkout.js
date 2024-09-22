'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {

    const pricing = new Map();
    pricing.set("A", {price:50 ,  promotions:[{promotionQuantity:5, promotionPrice:200},{promotionQuantity:3, promotionPrice:130}]});
    pricing.set("B", {price:30 ,  promotions:[{promotionQuantity:2, promotionPrice:45}]} );
    pricing.set("C", {price:20 ,  promotions:[{promotionQuantity:1, promotionPrice:20}]} );
    pricing.set("D", {price:15 ,  promotions:[{promotionQuantity:1, promotionPrice:15}]} );

    const exchangeOffers = new Map();
    exchangeOffers.set("E", [{quantity:2 , item:"B"}])

    const cart = new Map();
    cart.set("A", 0);
    cart.set("B", 0);
    cart.set("C", 0);
    cart.set("D", 0);
    cart.set("E", 0);

    for(let i=0; i<skus.length; i++){
        if(!pricing.has(skus[i])){
            return -1;
        }
        cart.set(skus[i],cart.get(skus[i])+1);
    }

    


   

    let totalCart=0;

    cart.forEach((value,key)=>{


    })

    return totalCart;


};

