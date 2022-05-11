import React , {useContext} from 'react'
import { projectActingContext } from '../../contexts/ActionContext'
import { ChartSection } from './chartsection/ChartSection'
import { DefaultContent } from './defaultcontent/DefaultContent'
import  TableSection  from './tablesection/TableSection'

export const Main = () => {
    const actionContext = useContext(projectActingContext)
    return (
        <div style={{width:"100%" , display : 'flex' , flexDirection : "column" , alignItems :"center"}} >
            {
                actionContext.partShower == 0  &&
                <DefaultContent />
            }
            {
                actionContext.partShower == 1 &&
                <TableSection />
            }
            {
                actionContext.partShower == 2 &&
                <ChartSection />
            }
        </div>
    )
}
