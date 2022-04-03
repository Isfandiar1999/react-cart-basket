import React,{useState,useEffect} from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";

const PAGE_PRODUCTS = "products"
const PAGE_CART = "cart"

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {

  const [cart, setCart] = useState(cartFromLocalStorage)
  const [page, setPage] = useState("products")

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart])

  const removeFromCart =(productToRemove)=>(
    setCart(cart.filter((product)=>product!==productToRemove)))

  const navigateTo=(nextPage)=>(
      setPage(nextPage)
  )

  const addToCart = (product)=>{
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item)=>product.name===item.name)
      if(itemInCart) {
        itemInCart.quantity++;
      }
      else {
        itemInCart = {
          ...product,
          quantity: 1
        };
        newCart.push(itemInCart)
      }
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () =>{
    return cart.reduce((sum, {quantity})=>sum+quantity,0)
  }

  const setQuantity =(product, amount)=> {
    const newCart = [...cart];
    newCart.find((item)=>item.name === product.name).quantity = amount;
    setCart(newCart)
  };

  return (
    <div className="App">
      <header className="header">
        <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>View Products</button>
        <button onClick={()=>navigateTo(PAGE_CART)}>Go to Cart({getCartTotal()})</button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />} 
      {page=== PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} setQuantity={setQuantity} clearCart={clearCart}/>}
    </div>
  );
}

export default App;
