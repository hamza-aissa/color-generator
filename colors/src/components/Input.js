import React from 'react'




const Input = ({change,inputValue,focus}) => {
    const styles={
        padding: 10,
        border: 'none',
        bordeRadius: 5,
        margin: 10,
        fontSize: 16,
        width: 300,
        height: 20,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '5px'
    }
    

    return (
        // <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            style={styles}
            placeholder='type any color'
            ref={focus} 
            autoFocus
            value={inputValue} 
            onChange={change} />
        // </form>
    );
}


export default Input