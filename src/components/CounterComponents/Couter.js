import React ,{useState}from "react"
import CounterButton from "./CouterButton"


const Counter =()=>{
    const [count,setCount] =useState(0)  
    const add = ()=>{
        setCount(count +1)
    }
    const multiply = ()=>{
        setCount(count * 5)
    }
    const reset = ()=>{
        setCount(0)
    }
      return(
        <div>
            <h1>React Couter</h1>
            <p className="click_desc">
                Your total:<span>{count}</span>
            </p>
            <div className="button_container">
              <CounterButton buttonText={"Add 1"} clickHander={add}/>
              <CounterButton buttonText={"Multiply By 5"} clickHander={multiply}/>
              <CounterButton buttonText={"reset"} clickHander={reset}/>
            </div>

        </div>
    )
}

export default Counter;