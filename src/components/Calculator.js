import React  from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import '../App.css';

class Calculator extends React.Component{

    constructor(){
        super();

        this.scale = {
            c: "Celcius",
            f: "Fahrenheit",
        };

        this.state = {
            celcius: "",
            fahrenheit: ""
        };

    this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value, scale) {

        scale === this.scale.c ? this.setState(
            {celcius: value,
            fahrenheit: this.toFahrenheit(value)}
        ) : this.setState(
            {celcius: this.toCelcius(value),
            fahrenheit: value}
        ) ;
        
    }

    toCelcius = (fahrenheit) =>{
        //° C = 5/9 (° F - 32)
        if (fahrenheit !== ""){
            const celciusValue = (5/9 * (fahrenheit - 32)).toFixed(2);
            return celciusValue;
        }
        else{
            return "";
        }
        
    }

    toFahrenheit = (celcius) =>{
        //° F = 9/5 ( ° C) + 32
        if (celcius !== ""){
            const fahrenheitValue = ((9/5)*celcius + 32).toFixed(2);
            return fahrenheitValue;
        }
        else{
            return "";
        }
        
    }

    render(){

        return(
            <>
                <div className="center-screen align-card">
                    <h1>Temprature Converter</h1>
                    <Celcius value={this.state.celcius} handleOnChange={this.handleOnChange}/>
                        <br/>
                    <span style={{fontSize: "30px"}}>⇅</span>
                        <br/>
                    <Fahrenheit value={this.state.fahrenheit} handleOnChange={this.handleOnChange}/>
                </div>
            </>
        );
    }
}

export default Calculator;