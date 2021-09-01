import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar'
import MovieDetails from '../pages/MovieDetails'

const ReactRouter = ()=>{
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/movie/:imdbID" exact component={MovieDetails}/>
            </Switch>
        </Router>
    )
}

export default ReactRouter