import React, { createContext , useState } from 'react'

export const projectActingContext = createContext({
    partShower : 0,
    tableShower : () => { },
    chartShower : () => { },


})

export const ActionContext = (props) => {
    const [part, setPart] = useState(0)
    const tableShowHandler = () => {
        setPart(1)
        console.log(part);
    }
    const chartShowHandler = () => {
        setPart(2)
        console.log(part);
    }

    const data = {
        partShower : part,
        tableShower : tableShowHandler,
        chartShower : chartShowHandler
    }
    return (
        <div>
            <projectActingContext.Provider value={data} >
            {props.children}
            </projectActingContext.Provider>
        </div>
    )
}
