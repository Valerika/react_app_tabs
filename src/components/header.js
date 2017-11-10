import React from 'react';

import {NavLink} from 'react-router-dom';

const json = require('../tabs.json');

const Header = () => {
    return (
        <header id="tabs" className="tabs">
            <nav>
                <ul className="tabs">
                    {
                        json.map(tab => (
                            <li key={tab.id}>
                                <NavLink exact id={tab.id} activeClassName="tab-current" to={`/tab/${tab.id}`}
                                         order={tab.order} path={tab.path}>{tab.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
