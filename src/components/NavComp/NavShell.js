import React from 'react'
import Nav from './Nav'

const NavShell = Page => {
    return props =>
        <div>
            <Nav />
            <Page {...props}/>
        </div>
}

export default NavShell