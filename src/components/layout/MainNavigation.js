import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import {useContext} from 'react'
import FavoritesContext from '../../store/context'
function MainNavigation(){

    const context = useContext(FavoritesContext)

    return(
        <header className={classes.header}>
        <div className={classes.logo}>Посетени места</div>
        <nav>
            <ul>
                <li><Link to='/'>Сите</Link></li>
                <li><Link to='/newmeetup'>Додади ново место</Link></li>
                <li><Link to='favorites'>Омилени<span className={classes.badge}>{context.totalFavorites}</span></Link></li>
            </ul>
            </nav>
            </header>
    )
}
export default MainNavigation