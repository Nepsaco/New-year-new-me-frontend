import  React, { Component } from 'react'

export default class Login extends Component{
    state = {
        username: '',
        password: ''
    }

    changeHandler = (event) => {
        const name = [event.target.name]
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()

    }

    render(){
        return(
            <div className='login'>
                <form onSubmit>
                    <label>Username</label>
                    <input type='text' name='username' required onChange={this.changeHandler}/>
                    <label>Password</label>
                    <input type='text' name='password' required onChange={this.changeHandler}/>
                    <input className='button' type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}
