import React from 'react';

import {NavLink} from 'react-router-dom';

const tabs = require('../tabs.json');

tabs.sort((a, b) => a.order > b.order);

const Header = () => {
    return (
        <header id="tabs" className="tabs">
            <nav>
                <ul className="tabs">
                    {
                        tabs.map(tab => (
                            <li key={tab.id}>
                                <NavLink exact id={tab.id} activeClassName="tab-current" to={`/${tab.id}`}
                                         order={tab.order}>{tab.title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
