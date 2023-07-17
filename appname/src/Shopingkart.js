import { useReducer } from "react";
import Mobile from "./Mobile.webp"
import styles from "./style1.module.css"
const intialState={
    price:50000,
    operator:" ",
    result:" "
}
let reducer=(state,action)=>{
    switch(action.type){
        case "Setoperator":
          return {...state,operator:action.payload}  
        case "result":
            const{price,operator}=state
            let result=""
            if(price!==" "&&operator!==" "){
                switch(operator){
                    case"1":
                    result=price*1
                    break
                    case"2":
                    result=price*2
                    break
                    
                    
                    
                    
                    case"3":
                    result=price*3
                    break
                    case"4":
                    result=price*4
                    break
                    case"5":
                    result=price*5
                    break
                }
            
            } 
            return{...state,result}
        case"reset":
        return intialState

    }
}
function Shopingkart(){
    const[state,dispatch]=useReducer(reducer,intialState)
    let Handleoperator=(event)=>{
     dispatch({type:"Setoperator",payload:event.target.value})
    }
    let Handlesubmit=(event)=>{
        event.preventDefault()
        dispatch({type:"result"})
    }
    let Handlereset=()=>{
        dispatch({type:"reset"})
    }
    return(
        <div className={styles.mar}>
        <h1>Shopingkart</h1>
        <img src={Mobile}/>
        <h2>SAMSUNG S23</h2>
        <h2>Price:{state.price}</h2>
        <select value={state.operator} onChange={Handleoperator}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="submit" onClick={Handlesubmit} >Submit</button>
        <button onClick={Handlereset}>Reset</button>
        <h2>Total:{state.result}</h2>
        </div>
    )
}
export default Shopingkart