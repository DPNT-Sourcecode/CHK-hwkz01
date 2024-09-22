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



    const exchangeOffers = new Map();
    exchangeOffers.set("E", {quantity:2 , item:"B"})
    exchangeOffers.set("F", {quantity:3 , item:"F"})


    const cart = new Map();
   


    for(let i=0; i<skus.length; i++){
        if(!pricing.has(skus[i])){
            return -1;
        }
        cart.set(skus[i],cart.has(skus[i]) ? cart.get(skus[i])+1 : 1);
    }

    
    cart.forEach((_,key)=>{
        if(exchangeOffers.has(key)){
        const numberOfExchanges= Math.floor(cart.get(key)/exchangeOffers.get(key).quantity)
        cart.set(exchangeOffers.get(key).item, cart.get(exchangeOffers.get(key).item)-numberOfExchanges); 
        }
    })

   

    let totalCart=0;

    cart.forEach((value,key)=>{
        if(value>0){
            let remainder=value;
            pricing.get(key).forEach((promotions)=>{
                totalCart+=Math.floor(remainder/promotions.promotionQuantity) *promotions.promotionPrice;
                remainder=remainder%promotions.promotionQuantity

            })
        }

    })

    return totalCart;


};
