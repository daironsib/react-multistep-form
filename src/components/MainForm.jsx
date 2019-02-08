import React, {Component} from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'
import {connect} from 'react-redux'
import {stepNext, stepPrev} from "../actions"
import {bindActionCreators} from 'redux'

class MainForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        this.props.stepNext()
    }

    prevStep = () => {
        this.props.stepPrev()
    }

    handleChange = input => event => {
        this.setState({[input]: event.target.value})
    }

    render() {
        const {step} = this.props
        const {firstName, lastName, email, age, city, country} = this.state
        const values = {firstName, lastName, email, age, city, country}
        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <PersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 4:
                return <Success/>
        }
    }
}

export default connect(
    (state) => ({step: state.step}),
    (dispatch) => bindActionCreators({stepPrev, stepNext}, dispatch))(MainForm)