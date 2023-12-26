import { NavLink } from "react-router-dom";

function MainNavigation(){


return <header>

<nav>
    <ul>
        <li><NavLink to = '/' style={({isActive}) => ({ textAlign: isActive ? 'center': 'left',})} end>Landing Page</NavLink></li>
        <li><NavLink to = '/services' style={({isActive}) => ({ textAlign: isActive ? 'center': 'left',})} end>Services</NavLink></li>
        <li><NavLink to = '/offres' style={({isActive}) => ({ textAlign: isActive ? 'center': 'left',})} end>A propos del entrenateur</NavLink></li>

    </ul>
</nav>
</header>}


export default MainNavigation;