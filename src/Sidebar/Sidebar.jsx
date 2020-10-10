import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Sidebarchat from './Chat/Sidebarchat';
import classes from './Sidebar.module.css';
function Sidebar() {
    return (
        <div className = {classes.sidebar}>
            <div className = {classes.sidebar__header}>
                <Avatar className = {classes.sidebar__avatar}/>
                <div className = {classes.sidebar__header__right}>
                    <IconButton>
                        <DonutLargeIcon style={{ fill: '#A0A2A5' }}/>
                    </IconButton>
                    <IconButton>
                        <AddIcon style={{ fill: '#A0A2A5' }} />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon style={{ fill: '#A0A2A5' }} />
                    </IconButton>               
                </div>
            </div>

            <div className={classes.sidebar__search}>
                <div className = {classes.search__container}>
                    <SearchIcon className={classes.search__icon} />
                    <input placeholder='Search or start new chat' type="text" />
                </div>
                
            </div>

            <div className={classes.sidebar__footer}>
                <Sidebarchat/>       
            </div>
        </div>
    )
}

export default Sidebar
