import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

function Home(props) {
    const { route } = props;
    return (
        <div>Home
            <NavLink to="/recommend">Recomend</NavLink>
            <NavLink to="/singers">singers</NavLink>
            <NavLink to="/rank">Rank</NavLink>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Home;