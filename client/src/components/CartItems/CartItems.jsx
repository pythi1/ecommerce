import React, { useContext } from 'react';
import "./cartitems.css"
import { Shopcontext } from '../../context/shopcontext';
import delete_logo from "../Assets/delete_logo.png";

const CartItems = () => {


    const { GetTotalCartAmount, all_product, cartitem, RemoveFromCart } = useContext(Shopcontext);

    return (
        <div className='cartitem' >
            <div className='cartitems-format-main' >
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartitem[e.id] > 0) {
                    return (
                        <div key={e.id} >
                            <div className='cartitem-fomat cartitems-format-main' >
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity' >{cartitem[e.id]}</button>
                                <p>{e.new_price * cartitem[e.id]}</p>
                                <img className='cartitem-remove-icon' src={delete_logo} alt='dustbin' onClick={() => { RemoveFromCart(e.id) }} />
                            </div>
                            < hr />
                        </div>
                    )
                }
                else {
                    return null
                }
            })}

            <div className='cartitems-down' >
                <div className='cartitems-total' >
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitem-total-item' >
                            <p>Subtotal</p>
                            <p>${GetTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item' >
                            <p>Shipping Fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <h3>${GetTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button>Proceed to Check out</button>

                </div>
                <div className='cartitems-promocode' >
                    <p>if you have a promocode, enter it here...</p>
                    <div className='cartitems-promobox' >
                        <input type='text' placeholder='enter promocode here' />
                        <button>Submit</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CartItems