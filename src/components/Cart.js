import React from 'react'

const Cart = ({ cart, 
      removeFromCart,
      clearCart,
      setQuantity
       }) => {

  const getTotalSum = () =>{
    return cart.reduce((sum, {cost, quantity}) => sum + cost * quantity,0) 
  }

  

  return (
    <div>
      <h1>Cart</h1>
      <h1 className='total-sum'>${getTotalSum()}</h1>
      {cart.length>0 && <div className='clear-cart'><button  onClick={()=>clearCart()}>Clear Cart</button></div>}
      <div className="big-box"> 
      {
        cart.map((product, idx)=>(
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input 
              value={product.quantity}
              onChange={(e) => 
                setQuantity(product, parseInt(e.target.value))}
            />
            <img src={product.image} alt={product.name} />
            <button className='remove-from-cart' onClick={()=>removeFromCart(product)}>Remove</button>
          </div>
        ))
      }
      </div>
      
      </div>
  )
}

export default Cart