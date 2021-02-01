import React, {useState} from 'react';

const Count = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

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