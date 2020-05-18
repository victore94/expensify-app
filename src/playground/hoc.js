// Higher Order Component (HOC) - A component that renders another component
// reuse code 
// render hijacking
// prop manipulation
// abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (

    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private Info Please Dont Share</p>}

            <WrappedComponent {...props} />
        </div>
    )
}
const AdminInfo = withAdminWarning(Info)

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p> Please Login to view</p>)}
        </div>
    )
}

const AuthInfo = RequireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info='There are the details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='There are the details' />, document.getElementById('app'))