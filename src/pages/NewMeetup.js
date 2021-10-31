import MeetupForm from "../components/meetups/MeetupForm"
import {useHistory} from 'react-router-dom'
function NewMeetup(props){

const history = useHistory();

function addMeetupHandler(meetup){
    fetch("https://react-getting-started-ffacf-default-rtdb.firebaseio.com/meetups.json",
        {
            method: "POST",
            body: JSON.stringify(meetup),
            headers:{
                "Content-Type": "application/json"
            }
        }
    ).then(()=>{
        history.replace('/')
    })
}

return (
    <section>
        <h1>Додади ново место</h1>
        <MeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
)

}
export default NewMeetup