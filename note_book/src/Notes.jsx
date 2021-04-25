import React from 'react';
// import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Notes(props) {
    // function is made for ,when user click the delete icon of note
    const deleteEvent = () => {
        props.delete(props.id);  //and this [delete] function is define in (App) components and use here using props
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button onClick={deleteEvent} className="dlt_btn">
                    <DeleteIcon className="dlt_icon" />
                </button>

            </div>
        </>
    )
}

export default Notes
