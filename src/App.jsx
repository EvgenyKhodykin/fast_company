import { React } from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Users from './components/Users'
import NavBar from './components/NavBar'
import Main from './layouts/Main'
import Login from './layouts/Login'

function App() {
    return (
        <>
            <NavBar />
            <Route path='/main' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/users' component={Users} />
        </>
    )
}

export default App
