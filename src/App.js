import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home-container/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import Resume from './Components/Pages/Resume/Resume';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/resume">
                        <Resume></Resume>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
