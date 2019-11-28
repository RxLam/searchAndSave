import React from 'react';
import styles from './app.module.css';
import {BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import Nav from 'react-bootstrap/Nav'



class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      suggestionsSaved: [],        
    };
    this.saveSuggestion = this.saveSuggestion.bind(this)
    this.remove = this.remove.bind(this)
  }

    saveSuggestion(item){
        this.state.suggestionsSaved.push(item)
    }
  
    remove(i){
        let suggestionsSaved = [...this.state.suggestionsSaved];
        suggestionsSaved.splice(i, 1);
        this.setState({suggestionsSaved: suggestionsSaved});
    }

    render(){
        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={() =><route.component 
                                            saveFunction={this.saveSuggestion}
                                            data={this.state.suggestionsSaved} 
                                            remove={this.remove}
                                            />}
                          exact={route.exact} 
                          key={route.url}
                    />;
        })
        return (
                <Router>
                    <header>
                        <div className="container">
                            <hr/>
                            <div className="row justify-content-between">
                                <div>
                                    <div>
                                    <h1>Мои организации</h1>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </header>
                    <div className="container">
                        <div>
                            <Nav fill variant="tabs">
                              <Nav.Item>
                                    <Nav.Link><NavLink to={routesMap.home} exact activeClassName={styles.active}>
                                    Новая организация
                                    </NavLink></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                    <Nav.Link><NavLink to={routesMap.cart} activeClassName={styles.active}>
                                    Сохраненные организации
                                    </NavLink></Nav.Link>
                              </Nav.Item>
                            </Nav>   
                            <div className="col col-9">
                                <Switch>
                                    {routesComponents}
                                </Switch>
                            </div>
                        </div>
                    </div>                
                </Router>
        )
    }
}

export default App;




