import React from 'react';

class Kelvin extends React.Component{

    handleOnChangeKelvin = (e) =>{
        this.props.handleOnChange(e.target.value, "Kelvin");

    }


    render(){

        return(

        <div className="temperature-input-box">
            <span  style={{fontSize: "20px"}}> <b>Kelvin</b></span>
            <input className="input-field" style={{fontSize: "20px"}} type="number" placeholder='Kelvin' value={this.props.value} onChange={this.handleOnChangeKelvin}/>
        </div>
        );
        
    }

}

export default Kelvin;