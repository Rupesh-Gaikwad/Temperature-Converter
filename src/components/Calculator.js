import React  from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import '../App.css';

class Calculator extends React.Component{

    constructor(){
        super();

        this.scale = {
            c: "Celcius",
            f: "Fahrenheit",
            k: "Kelvin",
        };

        this.state = {
            celcius: "",
            fahrenheit: "",
            kelvin: "",
        };

    this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value, scale) {
        console.log(value, typeof value);
        if (value.toString().includes("-")){
            alert("1 found");
        }

        switch (scale){
            case this.scale.c :
                this.setState({
                    celcius: value,
                    fahrenheit: this.toFahrenheit(value, scale),
                    kelvin: this.toKelvin(value, scale),
                })
                break;
            
            case this.scale.k :
                this.setState({
                    celcius: this.toCelcius(value, scale),
                    kelvin: value,
                    fahrenheit: this.toFahrenheit(value, scale)
                })
                break;

            case this.scale.f :
                this.setState({
                    celcius: this.toCelcius(value, scale),
                    kelvin: this.toKelvin(value, scale),
                    fahrenheit: value
                })
                break;

            default:
                alert("Something goes wrong.", scale);
        }
        
     }


    toCelcius = (value, scale) =>{
        //° C = 5/9 (° F - 32)
        if (value !== ""){
            return scale === this.scale.f ? parseFloat(5/9 * (value - 32)).toFixed(2) : parseFloat(value - 273.15).toFixed(2) ;
        }
        else{
            return "";
        }
        
    }

    toFahrenheit = (value, scale) =>{
        //° F = 9/5 ( ° C) + 32
        if (value !== ""){
            return scale === this.scale.c ? parseFloat((9/5)*value + 32).toFixed(2) : parseFloat((9/5)*(value-273.15) + 32).toFixed(2);
         }
        else{
            return "";
        }

        
    }

    toKelvin = (value, scale) =>{
        if (value !== ""){
            return scale === this.scale.c ? parseFloat(Number(value) + 273.15).toFixed(2) : parseFloat((5/9)*(Number(value) + 459.67)).toFixed(2);
        }
        else{
            return "";
        }

    }

    render(){

        return(
            <>
                <div className="calculator-card">
                    <p id="instructions"><b>Enter temperature in any
                        unit and get it's equivalent in other units.</b>
                    </p>
                    <div className="unit-input-unit">
                        <Celcius value={this.state.celcius} handleOnChange={this.handleOnChange}/>
                        <p className="unit"><sup>o</sup>C</p>
                    </div>
                        <br/>
                    <span className="arrow-icon">⇅</span>
                        <br/>
                    <div className="unit-input-unit">
                        <Kelvin value={this.state.kelvin} handleOnChange={this.handleOnChange}/>
                        <p className="unit">K</p>
                    </div>
                        <br/>
                    <span className="arrow-icon">⇅</span>
                        <br/>
                    <div className="unit-input-unit">
                        <Fahrenheit value={this.state.fahrenheit} handleOnChange={this.handleOnChange}/>
                        <p className="unit"><sup>o</sup>F</p>
                    </div>

                </div>
                <p style={{padding: "1rem 0rem"}}> Made with ♥ by Rupesh Gaikwad</p>
            </>
        );
    }
}

export default Calculator;