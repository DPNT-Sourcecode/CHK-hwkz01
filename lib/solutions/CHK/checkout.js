'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {

    const pricing = new Map();
    pricing.set("A", [{promotionQuantity:5, promotionPrice:200},{promotionQuantity:3, promotionPrice:130}, {promotionQuantity:1, promotionPrice:50}]);
    pricing.set("B", [{promotionQuantity:2, promotionPrice:45}, {promotionQuantity:1, promotionPrice:30}] );
    pricing.set("C", [{promotionQuantity:1, promotionPrice:20}] );
    pricing.set("D", [{promotionQuantity:1, promotionPrice:15}] );
    pricing.set("E", [{promotionQuantity:1, promotionPrice:40}] );
    pricing.set("F", [{promotionQuantity:1, promotionPrice:10}] );
    pricing.set("G", [{promotionQuantity:1, promotionPrice:20}] );
    pricing.set("H", [{promotionQuantity:10, promotionPrice:80}, {promotionQuantity:5, promotionPrice:45} , {promotionQuantity:1, promotionPrice:10}] );
    pricing.set("I", [{promotionQuantity:1, promotionPrice:35}] );
    pricing.set("J", [{promotionQuantity:1, promotionPrice:60}] );
    pricing.set("K", [{promotionQuantity:2, promotionPrice:120}, {promotionQuantity:1, promotionPrice:70}] );
    pricing.set("L", [{promotionQuantity:1, promotionPrice:90}] );
    pricing.set("M", [{promotionQuantity:1, promotionPrice:15}] );
    pricing.set("N", [{promotionQuantity:1, promotionPrice:40}] );
    pricing.set("O", [{promotionQuantity:1, promotionPrice:10}] );
    pricing.set("P", [{promotionQuantity:5, promotionPrice:200}, {promotionQuantity:1, promotionPrice:50}] );
    pricing.set("Q", [{promotionQuantity:3, promotionPrice:80}, {promotionQuantity:1, promotionPrice:30}] );
    pricing.set("R", [{promotionQuantity:1, promotionPrice:50}] );
    pricing.set("S", [{promotionQuantity:1, promotionPrice:20}] );
    pricing.set("T", [{promotionQuantity:1, promotionPrice:20}] );
    pricing.set("U", [{promotionQuantity:1, promotionPrice:40}] );
    pricing.set("V", [{promotionQuantity:3, promotionPrice:130}, {promotionQuantity:2, promotionPrice:90}, {promotionQuantity:1, promotionPrice:50}] );
    pricing.set("W", [{promotionQuantity:1, promotionPrice:20}] );
    pricing.set("X", [{promotionQuantity:1, promotionPrice:17}] );
    pricing.set("Y", [{promotionQuantity:1, promotionPrice:20}] );
    pricing.set("Z", [{promotionQuantity:1, promotionPrice:21}] );




    const exchangeOffers = new Map();
    exchangeOffers.set("E", {quantity:2 , item:"B"})
    exchangeOffers.set("F", {quantity:3 , item:"F"})
    exchangeOffers.set("N", {quantity:3 , item:"M"})
    exchangeOffers.set("R", {quantity:3 , item:"Q"})
    exchangeOffers.set("U", {quantity:4 , item:"U"})


    const cart = new Map();
   
    const groupMembers= [ "S", "T", "X", "Y", "Z"]
    const groupPrices=[]

    for(let i=0; i<skus.length; i++){
        if(!pricing.has(skus[i])){
            return -1;
        }
        cart.set(skus[i],cart.has(skus[i]) ? cart.get(skus[i])+1 : 1);
        if(groupMembers.includes(skus[i])){
            groupPrices.push(pricing.get(skus[i]));
        }
    }

    
    cart.forEach((_,key)=>{
        if(exchangeOffers.has(key)){
        const numberOfExchanges= Math.floor(cart.get(key)/exchangeOffers.get(key).quantity)
        cart.set(exchangeOffers.get(key).item, cart.get(exchangeOffers.get(key).item)-numberOfExchanges); 
        }
    })

   

    let totalCart=0;

    cart.forEach((value,key)=>{
        if(value>0 && !groupMembers.includes(key)){
            let remainder=value;
            pricing.get(key).forEach((promotions)=>{
                totalCart+=Math.floor(remainder/promotions.promotionQuantity) *promotions.promotionPrice;
                remainder=remainder%promotions.promotionQuantity

            })
        }

    })

    return totalCart;


};