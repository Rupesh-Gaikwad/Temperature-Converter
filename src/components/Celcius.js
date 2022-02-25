import React from 'react';
import '../App.css';

class Celcius extends React.Component{

    handleOnChangeCelcius = (e) =>{
        this.props.handleOnChange(e.target.value, "Celcius");

    }


    render(){
        return (
        <>
            <input class="input-field" style={{fontSize: "20px"}} type="number" placeholder="Celcius" value={this.props.value} onChange={this.handleOnChangeCelcius}/>
        </>
        );
        
    }

}

export default Celcius;