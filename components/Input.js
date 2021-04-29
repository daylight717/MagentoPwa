import React,{Component, useEffect,useState} from 'react'
import {Input} from "antd"
import  { string } from "prop-types"

const {TextArea,Password,Text,Search} = Input

const map = new Map([
    [ 'textarea',TextArea],
    [ 'password',Password],
    [ 'text',Text],
    [ 'search',Search]
 ])

const Sinput = ({type, ...props})=> {

    const Component = map.get(type)

    return  (   
        <div>
            <div style={{width:"500px",margin:"auto"}}> 
            < Component  {...props}/>
            </div>
        </div>
    ) 
}

Sinput.propTypes = {

    type: string
}
export default Sinput