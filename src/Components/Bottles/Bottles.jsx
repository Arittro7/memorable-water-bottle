import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../Utilities/Localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);


  const handleAddToCart = bottle => {
    const newCart = [...cart, bottle];
    setCart(newCart)
    addToLS(bottle.id)
  }

  useEffect(() => {
    fetch('bottle.json')
    .then(res => res.json())
    .then(data => setBottles(data));
  } ,[])

  useEffect(() => {
    console.log('Called' , bottles.length)
    if(bottles.length){
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id);
        if (bottle){
          savedCart.push(bottle)
        }
      }
      console.log('Saved Cart', savedCart)
      setCart(savedCart);
    }
  },[bottles])

  return (
    <div>
      <h3>Bottle data will shown from here</h3>
      <Cart cart={cart}></Cart>
      <div className="bottle-container">
      {
        bottles.map(bottle => <Bottle
        key={bottle.id}
        bottle={bottle}
        handleAddToCart={handleAddToCart}
        ></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;