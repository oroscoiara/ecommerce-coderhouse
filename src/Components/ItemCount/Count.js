import React, {useState, useEffect} from 'react';
import "./Count.css"


const Count = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  const add =()=> {
      count < stock && setCount(count + 1);
  }

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
      /*
  
      useEffect(() => {
        stock === 0 && setCount(0)
        return () => {setCount(initial)}
      }, [stock, initial])
 
  return(
    <div className="item_count">
      <div className="controllers">
        <button onClick={remove} className="button" disabled={count === 0 || stock === 0}> - </button>
        <span className="count">{count}</span>
        <button onClick={sum} className="button" disabled={count === 0 || stock === 0}> + </button>
        </div>
        {stock > 0 ?
        <button className="add-item" disabled={count === 0} onClick={onAddActive}>
          Agregar {count > 0 && `${count}`}< faShoppingCart className="cart-icon" /> </button>
          : <button className="add-item" disable>No in stock</button>
          }
 </div>
    )
;}

*/
export default Count;