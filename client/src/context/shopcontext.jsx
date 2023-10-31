import React, { createContext, useState } from "react";
import all_product from "../components/Assets/allproduct.js";


export const Shopcontext =  createContext(null);

const getDefaultCart = () => {
    let Cart = {};
    for (let i in all_product){
        Cart[i] = 0;
    }
    return Cart;
}


const ShopContextProvider= (props) => {

    const [cartitem , setcartitem] = useState(getDefaultCart);



   const AddtoCart = (itemId) => {
        setcartitem((prev) => {
            return (
                {
                    ...prev , [itemId] : prev[itemId]+1
                }
            )
        })

        console.log(cartitem);
   }


   const RemoveFromCart = (itemId) => {
    setcartitem((prev) => {
        return (
            {
                ...prev , [itemId] : prev[itemId]-1
            }
        )
    })
}

const GetTotalCartAmount = ( ) => {
    let TotalAmount = 0;

    for(const item in cartitem){
        if(cartitem[item] > 0 ){
            let itemInfo = all_product.find((product) => product.id === Number(item))
            TotalAmount += itemInfo.new_price * cartitem[item];
        }
        
        
    }

    return TotalAmount;
}

const GetTotalCartItem = () => {
    let totalItems = 0 ;

    for(const item in cartitem){
        if(cartitem[item] > 0 ){
            totalItems += cartitem[item]
        }
    }
    return totalItems;
}



const contextValue = {GetTotalCartAmount, GetTotalCartItem, all_product , cartitem, AddtoCart , RemoveFromCart};
   
    return(
        <Shopcontext.Provider value= {contextValue}>
            {props.children} 
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider; 