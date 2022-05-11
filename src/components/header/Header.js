import React , {useContext} from 'react'
//style
import classes from './Header.module.scss'
//context
import {infoContext} from '../../contexts/AppContext'
import { projectActingContext } from '../../contexts/ActionContext'


const Header = () => {
    const context = useContext(infoContext)
    const actionContext = useContext(projectActingContext)
    return (
        <header>
            <nav className={classes.headercontainer} >
                <h1>
                    مدیریت سرمایه بیمه سلامت ایرانیان
                </h1>
                <ul>
                    <li onClick={actionContext.tableShower} >جدول اطلاعات</li>
                    <li onClick={actionContext.chartShower} > نمودار نمایش توزیع وزن سرمایه گذاری</li>
                </ul>
            </nav>
            {
                 !context.loading ?
                 <div className={classes.edalatcontainer} >
                     <div className={classes.edalatbox} >
                         <div className={classes.title} >
                             <h3>
                                 ارزش پرتفوی 500 هزار تومانی
                             </h3>
                             <h1 className={classes.value} >
                                 {context.e500.last_value.toLocaleString()}
                             </h1>
                         </div>
                         <div className={classes.wandmonthretunsbox} >
                            <div className={classes.inner} >
                                <blockquote>بازدهی در هفته</blockquote>
                                <div className={classes.pshower} >
                                    %
                                <p>
                                    {context.e500.last7Return.toFixed(3)}
                                </p>
                                </div>
                            </div>
                            <div className={classes.inner} >
                                <blockquote>بازدهی در ماه</blockquote>
                                <div className={classes.pshower}>
                                    %
                                <p>
                                    {context.e500.last30Return.toFixed(3)}
                                </p>
                                </div>
                            </div>
                         </div>
                     </div>
                     <div className={classes.edalatbox} >
                         <div className={classes.title} >
                             <h3>
                                 ارزش پرتفوی 1 میلیون تومانی
                             </h3>
                             <h1 className={classes.value} >
                                 {context.e1.last_value.toLocaleString()}
                             </h1>
                         </div>
                         <div className={classes.wandmonthretunsbox} >
                            <div className={classes.inner} >
                                <blockquote>بازدهی در هفته</blockquote>
                                <div className={classes.pshower} >
                                    %
                                <p>
                                    {context.e1.last7Return.toFixed(3)}
                                </p>
                                </div>
                            </div>
                            <div className={classes.inner} >
                                <blockquote>بازدهی در ماه</blockquote>
                                <div className={classes.pshower}>
                                    %
                                <p>
                                    {context.e1.last30Return.toFixed(3)}
                                </p>
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
                :
                <h1>wait</h1>
            }
            {
                context.error && <h1>{context.error}</h1>
            }
        </header>
    )
}

export default Header
