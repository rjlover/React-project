import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function CreateNote(props) {
    //create this state for dynamic rendering the (title) section of (addnote)
    const [expandDiv, setExpandDiv] = useState(false);

    //create this state for storing user's input value from (addnote) and (title) section
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    // got user's input data from here and pass the data to [setNote] function with previous data
    const inputEvent = (e) => {
        const title = e.target.name;  //here title means=input event name
        const value = e.target.value;  //here value means =input event value

        setNote((preData) => {
            return {
                ...preData,
                [title]: value    //check the value of input section with name of input section and store it 
            }
        })
    }

    //this function run when user click the (add) note icon
    const addEvent = () => {
        if (!note.title || !note.content) {
            return alert('please add  Title and Note first!!!')
        }

        props.passNote(note);    //this [passNote] function is define in (App) component and use here using (props)

        //after note is added, the input section was cleared autometically
        setNote({
            title: '',
            content: ''
        });
        setExpandDiv(false)
    }

    //function for dynamic rendering title section of addnode section
    const divChange = () => {
        setExpandDiv(true);
    }

    return (
        <>
            <div className="main_note">
                <form>
                    {expandDiv ? (<input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off" />) : null}
                    <textarea onClick={divChange} rows="" name="content" value={note.content} onChange={inputEvent} column="" placeholder="Add your note..." />
                    <Button className="addBtn" onClick={addEvent} variant="contained" color="primary">
                        <AddIcon className="plus_sin" />
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote
