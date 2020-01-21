import React , { Component} from  'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'


export default class Calculator extends Component {

    clearMemory(){
        console.log("limpar")
    }
    setOperation(){
        console.log('Setando')
    }
    addDigit(digit){
        console.log(digit)
    }
    render() {
        const addDigit = d => this.addDigit(d)
        const setOperation = op=> this.setOperation(op)
        return (
            <div className="calculator">
                <Display/>
                <Button label='AC' click={()=> this.clearMemory()}/>
                <Button label='/' click={addDigit}/>
                <Button label='7'click={addDigit}/>
                <Button label='8'click={addDigit}/>
                <Button label='9'click={addDigit}/>
                <Button label='*'click={setOperation}/>
                <Button label='4'click={addDigit}/>                
                <Button label='5'click={addDigit}/>
                <Button label='6'click={addDigit}/>
                <Button label='-'click={setOperation}/>
                <Button label='1'click={addDigit}/>
                <Button label='2'click={addDigit}/>
                <Button label='3'click={addDigit}/>
                <Button label='+'click={setOperation}/>
                <Button label='0'click={addDigit}/>
                <Button label='.'click={setOperation}/>
                <Button label='='click={setOperation}/>
            </div>
            )
    }
}