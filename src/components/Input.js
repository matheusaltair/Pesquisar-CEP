import React from "react";
import '../Style.css';

    const Input = ({placeholder, value, onChange}) =>{
      return(<input type="number" placeholder={placeholder} value={value} onChange={onChange} />)
}

export default Input;
