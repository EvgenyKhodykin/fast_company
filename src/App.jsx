import { React } from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './components/NavBar'
import Main from './layouts/Main'
import Login from './layouts/Login'
import Users from './layouts/Users'

function App() {
    return (
        <>
            <NavBar />
            <Route exact path='/' component={Main} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/users/:userId?' component={Users} />
        </>
    )
}

export default App
