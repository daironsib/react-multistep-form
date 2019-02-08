import React, {Component} from 'react'

export default class Steps extends Component {
    createList = () => {
        const {step} = this.props
        let list = []


        for (let i = 1; i <= 4; i++) {
            list.push(<li className={step === i ? 'active' : ''}>{i}</li>)
        }
        return list
    }

    render() {
        return (
            <div className="steps_container">
                <ul>
                    {this.createList()}
                </ul>
            </div>
        )
    }
}