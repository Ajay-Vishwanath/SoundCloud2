import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            location: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.errors) {
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
                <form onSubmit={this.handleSubmit}>
                    <div className="signupform">
                        <h2 className="form-header">Create an Account</h2>
                        <br />
                        <br />
                        <label>
                                <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email *"
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder="Username *"
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password *"
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                                <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}
                                className="login-input"
                                placeholder="Location (Optional):"
                                />
                        </label>
                        <br />
                        <br />
                        <div className="formerrors">
                            {this.renderErrors()}
                        </div>
                        <input className="session-submit" type="submit" value="Continue" />
                        <p className="formmsg">We will not use your email nor devices for updates/tips on SoundCloud2's
                      products and services, nor will you receive any notifications. SoundCloud2 is a
                       non-monetized service; we will not use any of your personal information.</p>
                        <p className="formmsg">We have no targeted advertisements, nor any advertisements for that matter, 
                        so don't worry about that.</p>
                    </div>
                  
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);
