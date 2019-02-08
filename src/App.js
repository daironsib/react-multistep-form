import React, {Component} from 'react'
import './App.css'
import MainForm from './components/MainForm'
import Steps from "./components/Steps";
import {Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {stepPrev, stepNext} from './actions'

class App extends Component {

    render() {
        return (
            <Container textAlign='center'>
                <Steps step={this.props.step}/>
                <MainForm/>
            </Container>
        )
    }
}

export default connect(
    (state) => ({step: state.step}),
    (dispatch) => bindActionCreators({stepPrev, stepNext}, dispatch))(App)
