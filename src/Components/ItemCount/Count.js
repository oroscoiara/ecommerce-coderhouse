import React, {useState, useEffect} from 'react';
import "./Count.css"
import AddButton from '../../Components/Button/AddButton'

const ItemCount = (props) => {

  const [count, setCount] = useState(1);

  function onAdd(simb) {
      if ((simb === '+') && (count < props.max)) {
          setCount(count+1);
      } else if ((simb === '-') && (count > props.min)) {
          setCount(count-1);
      } 
  }
  

  return (
      <div style= {{display: 'flex', alignItems: 'center'}}>
        <div className="counter-container d-flex flex-row justify-content-around align-items-center shadow mt-3">
          <button className="btn" onClick={() => onAdd('-')}> - </button> 
          <p className="count"> {count} </p>
          <button className="btn" onClick={() => onAdd('+')}> + </button>
        </div>
        <AddButton itemCount={count} imagen={props.imgUrl} title={props.title} price={props.price}/>
      </div>
  );
}

export default ItemCount;


/*

const Count = ({initial, stock, onAdd, count, setCount, handleButton}) => { 
  
  useEffect(() => {
    handleButton(count);},
    [count]
  );

  const add =()=> {
      count < stock && setCount(count + 1);
  };

  const remove =()=> {
      count > initial && setCount(count-1);
  };

 const handleClick = () => {
    onAdd(count)
      }; 


      return(
        <>
    
        
        <div style= {{display: 'flex', alignItems: 'center'}}>
        <button onClick= {remove}> - </button>
        <p>{count}</p>
        <button onClick= {add}> + </button>
        </div>
        <button disabled={count < 1} onClick= {handleClick}> 
        {" "}
        Agregar {count} {" "} 
        </button>
        </>
      )
    ;}
     
export default Count;

*/