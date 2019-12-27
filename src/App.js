import React, { Component } from 'react';
import { BrowserRouter as Router, Link  } from 'react-router-dom'
import './css/scss/app.css';
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {
    state = {
        authorization: null,
        sidebarActive: null
    }

    // toggleSidebar = () => {
    //     this.setState({
    //         sidebarActive: !this.state.sidebarActive
    //     })
    // } 

    render(){
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Nav />
                    {/* <Sidebar /> */}
                    {this.state.authoriztion 
                        ?<Resoultions />
                        :<Login /> 
                    }
                </div>
            </Router>
        );
    }
}

export default App;
