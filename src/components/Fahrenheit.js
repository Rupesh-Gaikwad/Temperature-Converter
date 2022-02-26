import React from 'react';

class Fahrenheit extends React.Component{

    handleOnChangeFahrenheit = (e) =>{
        this.props.handleOnChange(e.target.value, "Fahrenheit");

    }


    render(){

        return(

        <div className="temperature-input-box">
            <span  style={{fontSize: "20px", color: "black"}}> <b>Fahrenheit</b></span>
            <input className="input-field" style={{fontSize: "20px"}} type="number" value={this.props.value} onChange={this.handleOnChangeFahrenheit}/>
        </div>
        );
        
    }

}

export default Fahrenheit;