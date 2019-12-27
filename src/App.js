import React, { Component } from 'react';
import { BrowserRouter as Router, Link  } from 'react-router-dom'
import './css/scss/app.css';
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import Resolutions from './components/Resolutions/Resolutions'

const BASE_URL = 'http://localhost:9000'

class App extends Component {
    state = {
        authorization: true,
        resolutions: [],
        sidebarActive: null
    }

    componentDidMount(){
        fetch(`${BASE_URL}/resolutions`)
            .then(response => response.json())
            .then(resolutions => {
                this.setState({ resolutions })
            })
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
                    {this.state.authorization
                        ?<Resolutions />
                        :<Login /> 
                    }
                </div>
            </Router>
        );
    }
}

export default App;
