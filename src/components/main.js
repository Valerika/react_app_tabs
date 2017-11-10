import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import DummyTable from './tabs/dummyTable';
import DummyList from './tabs/dummyList';
import DummyChart from './tabs/dummyChart';

const Main = () => (
    <div className="content">
        <main>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/tab/dummyTable"/>)}/>
                <Route exact path="/tab/dummyTable" component={DummyTable}/>
                <Route path="/tab/dummyList" component={DummyList}/>
                <Route path="/tab/dummyChart" component={DummyChart}/>
            </Switch>
        </main>
    </div>
)

export default Main;
