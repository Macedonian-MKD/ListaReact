import Card from "../ui/Card"
import classes from './MeetupForm.module.css'
import {useRef} from 'react'

function MeetupForm(props){

    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const addressRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredAddress = addressRef.current.value;

        const meetupData={
            title: enteredTitle,
            url: enteredImage,
            description: enteredDescription,
            address: enteredAddress
        }

        props.onAddMeetup(meetupData)

    }
return(
    <Card>
    <form action="" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
        <label htmlFor="title">Назив на место</label>
        <input type="text" id="title" required ref={titleRef}/>
        </div>
        <div className={classes.control}>
        <label htmlFor="image">Внеси линк од слика</label>
        <input type="url" id="image" required ref={imageRef}/>
        </div>
        <div className={classes.control}>
        <label htmlFor="address">Внеси адреса</label>
        <input type="text" id="address" required ref={addressRef} />
        </div>
        <div className={classes.control}>
        <label htmlFor="description">Внеси опис</label>
        <textarea id="description" required  rows='5' ref={descriptionRef}/>
        </div>
        <div className={classes.actions}>
            <button>Додади</button>
        </div>
    </form>
    </Card>
)
}
export default MeetupForm