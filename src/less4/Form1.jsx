import { React, PureComponent } from 'react'
import '../App.css'

class Form1 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            password: "",
            isValid: {
                userName: {
                    pattern: /^\w{6,20}$/,
                    flag: true
                },
                password: {
                    pattern: /^\w{5,15}$/,
                    flag: true
                },
            }
        }
    }

    changeInputName = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    validate = (e) => {
        const { name, value } = e.target;
        let fieldInfo = this.state.isValid[name];
        const isValid = fieldInfo.pattern.test(value);

        this.setState(prevState => ({
            isValid: {
                ...prevState.isValid,  // оператор spread, который копирует предыдущий объект состояния isValid в новый объект
                [name]: {
                    ...prevState.isValid[name],  // копируем и изменяем только flag
                    flag: isValid
                }
            }
        }));
    }

    render() {
        return (
            <>
                <h2>Form</h2>
                <input
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.changeInputName}
                    onInput={this.validate}
                    className={!this.state.isValid.userName.flag && 'error'}
                    placeholder='User name' />
                <span>{this.state.userName}</span>
                <br/><br/>
                <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.changeInputName}
                    onInput={this.validate}
                    className={!this.state.isValid.password.flag && 'error'}
                    placeholder='Password' />
                <span>{this.state.password}</span>
            </>
        )
    }
}

export default Form1