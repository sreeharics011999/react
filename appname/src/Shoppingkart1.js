import { useReducer } from "react";
import Mobile from "./Mobile.webp"
import styles from "./style1.module.css"
const intialState={
    price:50000,
    operator:1,
    result:" "
}
let reducer=(state,action)=>{
    let qun=""
    switch(action.type){
        
        case "Setoperator":
            switch(operator){
                case"add":
                qun= operator+1
                case"substract":
                qun= operator-1
            }
          return {...state,operator}  
        case "result":
            const{price,operator}=state
            let result=""
            if(price!==" "&&operator!==" "){
                result=operator*price
            }
            return{...state,result}
        case"reset":
        return intialState

    }
}
function Shopingkart1(){
    const[state,dispatch]=useReducer(reducer,intialState)
    let Handlesubmit=(event)=>{
        event.preventDefault()
        dispatch({type:"result"})
    }
    let Handlereset=()=>{
        dispatch({type:"reset"})
    }
    let Handleoperator=(event)=>{
        dispatch({type:"Setoperator",payload:event.target.value})
    }
    return(
        <div className={styles.mar}>
        <h1>Shopingkart</h1>
        <img src={Mobile}/>
        <h2>SAMSUNG S23</h2>
        <h2>Price:{state.price}</h2>
        <button value={state.operator} onClick={Handleoperator}>+</button>
        <h2>{state.operator}</h2>
        <button value={state.operator} onClick={Handleoperator}>-</button>
        <button type="submit" onClick={Handlesubmit} >Submit</button>
        <button onClick={Handlereset}>Reset</button>
        <h2>Total:{state.result}</h2>
        </div>
    )
}
export default Shopingkart1