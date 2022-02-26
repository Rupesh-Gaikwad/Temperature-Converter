import React from 'react';
import '../App.css';

class Celcius extends React.Component{

    handleOnChangeCelcius = (e) =>{
        this.props.handleOnChange(e.target.value, "Celcius");

    }

    render(){
        return (
        <div className="temperature-input-box">
            <span  style={{fontSize: "20px", color: "black"}}> <b>Celcius</b></span>
            <input className="input-field"  style={{fontSize: "20px"}} type="number" value={this.props.value} onChange={this.handleOnChangeCelcius}/>
            
        </div>
        );
        
    }

}

export default Celcius;