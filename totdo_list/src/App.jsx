import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Itemlist from './Itemlist';

const App = () => {
  const [item, setItem] = useState("");
  const [newItem, newSetItem] = useState([]);

  //after typing something in input fild the value is store in [item] and comming from [setItem()]
  const itemChangeEvent = (e) => {
    setItem(e.target.value);
  };

  //after click the add botton the list is store in array [newItem] and comming from [newSetItem()] with (previous) value
  const itemAdded = () => {
    if (!item) {
      return alert("Please Add something");
    }
    //with (spread) operator every time print the all list from [newItem] array with previous storing list and current list
    newSetItem((preValue) => {
      return [...preValue, item]
    });
    setItem("");
  }



  // by (filter) method we can delete any list and pass a variable (where variable value is deleted item's id)
  const deleteItem = (id) => {
    newSetItem((preValue) => {
      return preValue.filter((arryItem, index) => {
        //check (if deleted item's id is not matched or matched with other item's id, print all except matching item)
        return index !== id;
      });
    });
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input type="text" placeholder="Add Any Item" value={item} onChange={itemChangeEvent} />
          <Button id="btn" variant="contained" color="primary" onClick={itemAdded}>
            <AddIcon />
          </Button>
          <ol>
            {//by (map) method we print all the list from [newItem] array with index
              newItem.map((val, index) => {
                return <Itemlist key={index} id={index} value={val} onSelect={deleteItem} />
              })
            }

          </ol>
        </div>
      </div>
    </>
  )
};



export default App;