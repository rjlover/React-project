import React, { useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Itemlist = (props) => {
    const [line, setLine] = useState(false);

    //make this function for croos line(dynamic css rendering)
    const cutIt = () => {
        setLine(true);
        console.log("halo");
    }
    return (
        <>
            <div className="list_body">
                <span id="cross_btn" onClick={cutIt}> <HighlightOffIcon /> </span>

                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.value}</li>

                <span id="dlt_btn" onClick={() => { props.onSelect(props.id) }}><DeleteForeverIcon /></span>
            </div>
        </>
    )
};

export default Itemlist;