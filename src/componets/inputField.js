import React from 'react';

const InputField=({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
    })=>{
    return(
    <>
        <input
            style={{borderColor:'red'}}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        ></input><br/>
        <div style={{color:'red'}}>{errorMessage}</div>
    </>
    );
};

export default InputField;