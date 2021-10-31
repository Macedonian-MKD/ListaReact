import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import {useContext} from 'react'
import FavoritesContext from '../../store/context'
function MeetupItem(props){

    const favoriteCtx = useContext(FavoritesContext);
    const isFavorite = favoriteCtx.isFavorite(props.id)

    function toggleFavoriteHandler(){
        if(isFavorite){
            favoriteCtx.removeFavorite(props.id)
        }else{
            favoriteCtx.addFavorite({
                id:props.id,
                title: props.title,
                url: props.image,
                description : props.description,
                address: props.address
            })
        }

    }

    return(
        <li className={classes.item}>
            <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteHandler}>{isFavorite ? "Отстрани од омилени" : "Додади во омилени"}</button>
        </div>
        </Card>
        </li>
    )
}
export default MeetupItem