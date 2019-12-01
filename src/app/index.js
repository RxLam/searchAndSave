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
                            <h1>Мои организации</h1>
                        </div>
                    </header>
                    <div className="container">
                            <ul>
				<NavLink className={styles.not_active} to={routesMap.home} exact activeClassName={styles.active}>
					Новая организация
				</NavLink>
			    </ul>
                            <ul>
				<NavLink className={styles.not_active} to={routesMap.cart} activeClassName={styles.active}>
					Сохраненные организации
				</NavLink>
			    </ul>                           
                            <div>
                                <Switch>
                                    {routesComponents}
                                </Switch>
                            </div>
                    </div>                
                </Router>
        )
    }
}

export default App;












