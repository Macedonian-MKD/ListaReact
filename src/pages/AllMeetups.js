import MeetupList from '../components/meetups/MeetupList'
import {useState, useEffect} from 'react'
function AllMeetups(props){
    
    const [isLoading,setLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([])
    useEffect(()=>{
        setLoading(true);
        fetch("https://react-getting-started-ffacf-default-rtdb.firebaseio.com/meetups.json").then((response)=>{
            return response.json()
        }).then((data)=>{
            const meetups =[];
            for ( const key in data){
                const meetup = {
                    "id": key,
                    ...data[key]
                }
                meetups.push(meetup)
            }
            setLoading(false);
            setLoadedMeetups(meetups)
        })
    },[])

    if(isLoading){
        return(
            <p>Се вчитува...</p>
        )
    }

return (
    <MeetupList meetups={loadedMeetups}/>
)

}
export default AllMeetups