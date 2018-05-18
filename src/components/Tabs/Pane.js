import React from 'react';
import PropTypes from 'prop-types';

export default function Pane(props){
    console.log(props.content, 'content pane')
    return(
        <div className='pane'>
        this thing doesn't do anything at all. Why did they even have me make it? It like it's just a place holder. 
            {props.content}
        </div>
    )
}

// Pane.propTypes = {
//     children: PropTypes.element.isRequired
//   }