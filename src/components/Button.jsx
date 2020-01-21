import React from 'react'
import './Button.css'

/*
Aplica a classe button como default e conforme o parâmetro que receber via props
aplica alguma das outras classes (operation, double ou triple)
*/
export default props => 
    <button onClick={e => props.click && props.click(props.label)} className={` 
        button 
        ${props.operation ? 'operation': ''}
        ${props.double ? 'double': ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
        </button>
