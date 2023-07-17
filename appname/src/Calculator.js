import { useReducer } from "react"
const intialState={
    num1:" ",
    num2:" ",
    operator:" ",
    result:" "
}
function reducer(state,action){
    switch(action.type){
        case "Set_num":
            return { ...state,[action.payload.name]:action.payload.value}
        case "Set_operator":
            return {...state,operator:action.payload}
        case "Calculate":
            const{num1,num2,operator}=state
            let result=" "
            if(num1!==" "&&num2!==" "&&operator!==" "){
             switch(operator){
                case"+":
                result=parseFloat(num1)+parseFloat(num2)
                break
                case"-":
                result=parseFloat(num1)-parseFloat(num2)
                break
                case"*":
                result=parseFloat(num1)*parseFloat(num2)
                break
                case"/":
                result=parseFloat(num1)/parseFloat(num2)
                break
                default:
                 result=" "
                 break 
             }
            }    
            return{...state,result}
            case "reset":
             return intialState
             default:
                return state
    }
}
function Calculator(){
    const[state,dispatch]=useReducer(reducer,intialState)
        const Handleinputchange=(event)=>{
            const{name,value}=event.target
            dispatch({type:"Set_num",payload:{name,value}})
        }
        const Handleoperator=(event)=>{
            dispatch({type:"Set_operator",payload:event.target.value})
        }
        const Handlesubmit=(event)=>{
         event.preventDefault()
         dispatch({type:"Calculate"})
        }
        const Handlereset=()=>{
            dispatch({type:"reset"})
        }
    return(
        <div>
            <form onSubmit={Handlesubmit}>
                <input type="number"name="num1" value={state.num1} onChange={Handleinputchange}/>
                <select name="operator" value={state.operator} onChange={Handleoperator}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number"name="num2" value={state.num2} onChange={Handleinputchange}/>
                <button type="submit">Calculate</button>
                <button type="button" onClick={Handlereset}>reset</button>
            </form>
            <div>
                result:{state.result}
            </div>
        </div>
    )
}
export default Calculator