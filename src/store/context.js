import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favoriteMeetup: [],
    totalFavorites: 0,
    addFavorite: (meetup)=>{},
    removeFavorite: (meetupId)=>{},
    isFavorite : (meetupId)=>{}
})

export function ContextProvider(props){

    const [ userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup){
        return(
            setUserFavorites(
                (previousFavorites)=>{
                    return previousFavorites.concat(favoriteMeetup)
                }
            )
        )
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites((previousFavorites)=>{
            return previousFavorites.filter((meetup)=>{
                return meetup.id !== meetupId
            })
        })
    }

    function isFavoriteHandler(meetupId){
        return userFavorites.some((meetup)=>{
            return meetup.id === meetupId
        })
    }

    const context = {
        favorites: userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler
    }



    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext