// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import classes from './MainNavigations.module.css'
export default function MainNavigations(){
    return(
        <nav className={classes.header}>
            <ul className={classes.list}>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li> */}
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
               
            </ul>
        </nav>

    )
}