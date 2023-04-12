import { React } from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from './components/NavBar'
import Main from './layouts/Main'
import Login from './layouts/Login'
import Users from './components/Users'

function App() {
    return (
        <>
            <NavBar />
            <Route exact path='/main' component={Main} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/users' component={Users} />
        </>
    )
}

export default App
