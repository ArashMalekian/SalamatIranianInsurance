import React, { createContext , useReducer, useEffect } from 'react'
import axios from 'axios'

export const infoContext = createContext();

const initialState = {
    loading:true,
    error:"",
    
        e1:{},
        e500:{},
        ostani:{},
        pieChart:{}
    
}

const reducer = (state , action) => {
    switch(action.type){
        case "E1SETTER" :
            return {...state , e1 : action.payload ,
                     loading : false }
        case "E500SETTER" :
            return { ...state , e500 : action.payload,
                     loading : false }
        case "OSTANISETTER" : 
            return { ...state , ostani : action.payload,
                     loading : false }
        case "PIECHARTSETTER" : 
            return { ...state , pieChart : action.payload,
                     loading : false }
        case "ERRORR" : 
            return { error : "",
                     loading : false }
        default :
            return state
            
    }
}

export const AppContext = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const edalat1Getter = async () =>{
        //    await axios.get("http://localhost:3000/edalat1")
        //     .then(response => dispatch({type : "E1SETTER" , payload : response.data}))
        //     .catch(error => dispatch({type : "ERROR" , payload: error }) )
        const one = "http://localhost:3000/edalat1"
        const two = "http://localhost:3000/edalat5"
        const three = "http://localhost:3000/ostani_data"
        const four = "http://localhost:3000/pie_chart1"
        const req1 = axios.get(one)
        const req2 = axios.get(two)
        const req3 = axios.get(three)
        const req4 = axios.get(four)
        await axios.all([req1 , req2 , req3 , req4])
        .then(axios.spread((...response) => {
            const res1 = response[0].data
            const res2 = response[1].data
            const res3 = response[2].data
            const res4 = response[3].data
            dispatch({type : "E1SETTER" , payload : res1})
            dispatch({type : "E500SETTER" , payload : res2})
            dispatch({type : "OSTANISETTER" , payload : res3})
            dispatch({type : "PIECHARTSETTER" , payload : res4})
            console.log(state);
        }))
        .catch(error => dispatch({type : "ERROR" , payload : error}))
        };
        edalat1Getter();
        console.log(state);
        
    }, [])
    return (
        <div>
            <infoContext.Provider value={state} >
                {props.children}
            </infoContext.Provider>
        </div>
    )
}
