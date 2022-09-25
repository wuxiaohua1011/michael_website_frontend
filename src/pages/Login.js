import axios from 'axios';
import React from 'react';
import Main from '../layouts/Main';
import { setToken } from "../Auth"
import qs from 'qs'
import { serverHost, serverPort } from '../configs';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault(event);

        const params = qs.stringify({
            'username': this.state.email,
            'password': this.state.password
          });
          const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          };
        if ((this.state.email == "") & (this.state.password == "")) {
            // TODO: pop up a warning window here
            alert("Please input email and password")
            return;
        } else {
            axios.post(`http://${serverHost}:${serverPort}/v2/login/`, params, headers).then(
                result => {
                    if (result.status === 200) {
                      setToken(result.data);
                    } else {
                        alert("Unknown error happened, please try again later or inspect console log for debugging");
                        console.log("result");
                    }
                  }).catch(e => {
                    if (e.response.status == 401) {
                        alert("In correct username or password")
                    }
                  });
        }
    }

    clearForm() {
        this.setState({
            email: "",
            password: ""
        });
    }

    render() {
        return (
            <div>
            <form
                className="needs-validation"
                noValidate
                onSubmit={this.handleSubmit}
            >
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group" style={{ paddingTop: 40 }}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary float-right col-auto"
                            onClick={this.clearForm}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form >
            </div>
        );
    }
}

const Login = () => {
    return (
        
        <Main
            title="Login"
            description="Login page only Michael and approved person can access">
            <div className='d-flex justify-content-center flex-nowrap'>
                <Form />  
            </div>
        </Main>
    )
}

export default Login;
