import React, {useState, useEffect} from 'react';
import "./Count.css"


const Count = ({initial, stock, onAdd}) => { //initial, max
  const [count, setCount] = useState(1);

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