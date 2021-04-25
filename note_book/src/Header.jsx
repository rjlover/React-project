import React from 'react';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

const Header = () => {
    return (
        <>
            <div className="header">
                {/* <img src="#" alt="logo" width="70" height="50" /> */}
                <CollectionsBookmarkIcon />
                <h1>RJ-KHATA</h1>
                <CollectionsBookmarkIcon />
            </div>
        </>
    )
}

export default Header;