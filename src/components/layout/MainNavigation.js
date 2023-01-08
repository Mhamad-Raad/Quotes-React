import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to='/Quotes'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/NewQuote'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Quote++
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
