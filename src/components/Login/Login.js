import  React, { Component } from 'react'

export default class Login extends Component{
    render(){

        return(
            <div className='login'>
                <form>
                    <label>Username</label>
                    <input type='text' />
                    <label>Password</label>
                    <input />
                    <input type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}
