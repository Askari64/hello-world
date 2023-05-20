/*import React from 'react'

const LearningProps = (props) => {
    return(
        <>
            <h1>Hello {props.name}! We're learning how to use props</h1>
            {
                props.children
            }
        </>
    )
}

export default LearningProps*/

//destructured

import React from 'react'

const LearningProps = ({name, children}) => {
    return(
        <>
            <h1>Hello {name}! We're learning how to use props</h1>
            {
                children
            }
        </>
    )
}

export default LearningProps