import React from 'react';
import PropTypes from 'prop-types';

export default function Pane(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

// Pane.propTypes = {
//     children: PropTypes.element.isRequired
//   }