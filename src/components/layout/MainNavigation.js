import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/Quotes" activeClassName={classes.active} >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/NewQuote" activeClassName={classes.active} >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
