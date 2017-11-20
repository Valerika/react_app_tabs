import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const tabs = require('../tabs.json');

class Routes extends Component {
    state = {}

    componentDidMount() {
        const { location: { pathname } } = this.props;
        this.loadComponent(pathname);

    }

    componentWillReceiveProps(next) {
        const { location: { pathname } } = this.props;
        const { location: { pathname: nextPathname } } = next;

        if (pathname !== nextPathname) {
            this.loadComponent(nextPathname)
        }
    }

    loadComponent(pathname) {
        const tab = tabs.find(tab => pathname === `/${tab.id}`);

        if (tab && !this.state[tab.id]) {
            import(`./${tab.path}`).then(Comp => {
                this.setState({ [tab.id]: Comp.default });
            });
        }
    }

    render() {
        return (
            <div className="content">
                <main>
                    <Switch>
                        {tabs.map(tab => (
                            <Route
                                key={tab.id}
                                path={`/${tab.id}`}
                                render={props => {
                                    const Tab = this.state[tab.id];
                                    return (
                                        Tab
                                            ? <Tab />
                                            : <span>Is loading ... </span>
                                    );
                                }} />
                        ))}
                        <Redirect to="/dummyList" order="0"/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(Routes);
