import React from 'react'
//import { Cardd } from './Cardd'
import { Cardcontent } from './Cardcontent'

export const DashBoard = (props) => {
    const {news,heading,res}=props
    return (
        <>
        <h2 className='m-2 text-center ps-md-5 text-md-start'>{props.heading}
        {heading=='Category'?<h2 className='d-inline p-2'>{res}</h2>:null}
        </h2>
        <div className='d-flex flex-row flex-wrap justify-content-around'>
           {
            news.map((item,index)=>{
                return <Cardcontent key={index} item = {item}/>
            })
           }
        </div>
        </>
    )
}
