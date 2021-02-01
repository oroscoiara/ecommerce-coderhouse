import React from 'react'

const Button = (props) => {

        return (
            <button style={{ borderRadius: '7px', backgroundColor: 'green' } }> 
            {props.text}
            </button>

    )
}

export default Button;