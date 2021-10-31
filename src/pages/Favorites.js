import {useContext} from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavoritesContext from '../store/context'

function Favorites(){
    let content;
    const favoritesCtx = useContext(FavoritesContext);

    if (favoritesCtx.totalFavorites ===0){
        content = <p>Сеуште немате омилени посети...</p>
    }
    else {
        content = <MeetupList meetups = {favoritesCtx.favorites}/>
    }

return(
   
     <section>
        <h1>Омилени посети</h1>
      {content}
      </section>
)
}
export default Favorites