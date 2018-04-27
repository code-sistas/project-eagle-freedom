import React, {Component} from 'react';

export default class dropDown extends Component{
    constructor(){
        super()
        this.state={
            selected: ''
        }
    }

    select(value){
        this.setState({
            selected: value
        })
    }

    render(){
        console.log(this.state.selected)
        return(
            <div>
                <select onChange={e=>this.select(e.target.value)}>
                    {this.props.basketOfThings.map((properthing,i)=>{
                        return(
                            <option value={`${properthing}`} key={i}>{properthing}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}