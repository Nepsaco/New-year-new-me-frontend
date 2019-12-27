import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Nav = () => {

    const showSidebar = (event) => {
        if (<Sidebar /> === true) {
            return null
        }else {
            return <Sidebar />
        }
    }

    return (
        <nav>
            <Link to='/menu'>&#9776;</Link>
            {/* <Switch> */}
            {/*     <Route path="/menu"> */}
            {/*         <Sidebar /> */}
            {/*     </Route> */}
            {/* </Switch> */}
        </nav> 
    )
}

export default Nav
