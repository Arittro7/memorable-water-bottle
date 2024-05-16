import './Bottle.css'


const Bottle = ({bottle}) => {
  const {name, img, price} = bottle
  return (
    <div className='bottle'>
      <h2>Bottle : {name}</h2>
      <img src={img} alt="" />
      <h2>Price: {price}</h2>
    </div>
  );
};

export default Bottle;