import React from 'react'
import classes from './DefaultContent.module.scss'
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import wavePic from '../../../assets/pictures/wave.svg'

export const DefaultContent = () => {
    return (
        <>
        <div className={classes.container} >
             <h1>
                 بیمه سلامت ایرانیان
             </h1>
             <div>
             <ul>
                 <li>
             تهران ، میرداماد ، خیابان نسا ، خیابان زرنگار 
                 </li>
                 <li>
                     <BusinessIcon />
                 </li>
             </ul>
             <ul>
                 <li>021-23456789</li>
                 <li>
                     <CallIcon />
                 </li>
             </ul>
             </div>
             <ul className={classes.hint} >
                 <li>
                     برای نمایش نمودار و یا جدول اطلاعات به منو بار مراجعه کنید
                 </li>
                 <li>
                    <ReportGmailerrorredIcon sx={{fontSize:15 , marginTop:1,}} />
                 </li>
             </ul>
        </div>
        <img src={wavePic} alt="wavePic" />
        </>
    )
}
