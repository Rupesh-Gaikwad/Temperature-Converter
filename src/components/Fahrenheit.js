import React from 'react';

class Fahrenheit extends React.Component{

    handleOnChangeFahrenheit = (e) =>{
        this.props.handleOnChange(e.target.value);

    }


    render(){

        return(

        <>
            <input class="input-field" style={{fontSize: "20px"}} type="number" placeholder='Fahrenheit' value={this.props.value} onChange={this.handleOnChangeFahrenheit}/>
        </>
        );
        
    }

}

export default Fahrenheit;