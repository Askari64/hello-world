import React, {Component} from 'react'

class ClassProgressComponent extends Component {
    render() {
        return (
            <>
            <h1>Class Progress Component</h1>
            <p> This component is made for practicing whatever I just studied. It is a {this.props.type}</p>
            {
                this.props.children
            }
            </>   
        )
    }
}

export default ClassProgressComponent