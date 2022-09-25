import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class UpdateEmployee extends Component {

    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phone:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);

    }
    componentDidMount()
    {
        console.log('mount');
        console.log(this.props.match.params.id);
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
         let employee=res.data;
         this.setState({
            firstName:employee.firstName,
            lastName:employee.lastName,
            emailId:employee.emailId,
            phone:employee.phone
         })
        });
    }
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value })
    }
    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value})
    }
    updateEmployee = (event) => {
        let employee = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, phone: this.state.phone
        }
        EmployeeService.updateEmployee(employee,this.state.id);
       
        this.props.history.push('/employees')
        window.location.reload(false);
       
    }
    cancelEmployee() {
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className='text-center'>UPDATE FISHERMAN DETAIL</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Name:</label>
                                        <input placeholder='Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Contact</label>
                                        <input placeholder='Contact' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Device ID</label>
                                        <input placeholder='Device ID' name='emailId' className='form-control' value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    
                                    <div className='form-group'>
                                    <div className='row'>
                                    <br/>
                                    </div>
                                        <button className='btn btn-success' onClick={this.updateEmployee}>Update</button>
                                        <button className='btn btn-danger' onClick={this.cancelEmployee.bind(this)} style={{ marginLeft: '10px' }}>Cancel</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default UpdateEmployee;