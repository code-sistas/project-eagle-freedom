import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends Component{
    constructor(){
        super()
        this.state={
            selected: 0
        }
    }

    handleClick(index){
        this.setState({
            selected: index
        })
    }

    renderPanes(){
//When there is only one child on this.props.children, its value is JSX stuff. When there are multiple children, they are put into an array. I always need an array. The following makes sure my this.props.children are always in an array. 
        if (Array.isArray(this.props.children)===true){
            var children = this.props.children;
            console.log("children are array ______ renderPanes", children)
        }
        else{
            children = [this.props.children] || [];
            console.log("children are not array ______ renderPanes", children)
            
        }

        function createLabels(child,index){
            let activeClass = (this.state.selected === index ? 'active' : '');
            return(
                <div key={index}>
                    <div className={activeClass} onClick={this.handleClick.bind(this,index)}>
                        {child.props.label}
                    </div>
                </div>
            )
        }

        return(
            <div>
                {children.map(createLabels.bind(this))}
            </div>
        )
    }

    renderContent(){
//When there is only one child on this.props.children, its value is JSX stuff. When there are multiple children, they are put into an array. I always need an array. The following makes sure my this.props.children are always in an array. 
        if (Array.isArray(this.props.children)===true){
            var children = this.props.children;
            console.log("children are array ______ renderContent", children)
            
        }
        else{
            children = [this.props.children] || [];
            console.log("children are not array ______ renderPanes", children)
            
        }
        return(
            <div className='tabs-content'>
                {children[this.state.selected]}
            </div>
        )
    }

    render(){
        return(
            <div className='tab'>
                {this.renderPanes()}
                {this.renderContent()}
            </div>
        )
    }
}

// Tabs.propTypes = {
//     selected: PropTypes.number,
//     index: PropTypes.number.isRequired,
//     label: PropTypes.string.isRequired,
//     // children: PropTypes.element.isRequired
//   }