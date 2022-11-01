import React, { Component } from 'react'

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    render() {
        return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Employee</h3>

                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Forst Name: </label>
                                    <input 
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={this.state.firstName}
                                        onChange={this.changeFirstNameHandler}
                                    />

                                    <br/>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
