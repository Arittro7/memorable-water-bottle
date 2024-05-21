import './cart.css'

const Cart = ({cart}) => {
  return (
    <div>  
      <h3>Cart: {cart.length}</h3>
      <div className="cart-container"> 
        {
          cart.map(bottle=> <img src={bottle.img}></img>)
        }
      </div>
    </div>
  );
};

export default Cart;