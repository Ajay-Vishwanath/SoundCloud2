import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserLogin = this.demoUserLogin.bind(this);
    }

    componentDidMount() {
        if (this.props.errors){
            this.props.clearErrors();
        };        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    demoUserLogin() {
        this.setState({username: "DemoLogin", password: "musiclover59"}, () => {
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(this.props.closeModal);
            // this.props.history.push("/");
        }); 
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="loginform">
                        <h2 className="form-header">Sign In</h2>
                        <br />
                        <br />
                                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input" placeholder="Your Username"
                            />
                        <br />
                        <br /> 
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="password-input" placeholder="Your Password"
                            />
                        <br />
                        <div className="formerrors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
        
                        <p className="formmsg">We will not use your email nor devices to improve SoundCloud2's
                   products and services, you will not receive any notifications, and we will not use your personal
                   information. SoundCloud2 is a clone app.</p>
                        <p className="formmsg">We have no targeted advertisements - nor advertisements at all for that matter -
                        so no need to worry about that.</p>
                    
                         <button className="demo-button" onClick={this.demoUserLogin}>Demo Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
