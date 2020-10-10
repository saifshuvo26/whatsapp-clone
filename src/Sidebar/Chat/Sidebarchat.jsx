import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import classes from './Sidebarchat.module.css';
function Chat() {
    return (
        <div className = {classes.sidebar__chat}> 
            <div className = {classes.chat__avatar}>
<Avatar/>
            </div>
            <div className = {classes.chat__details}>
                <div className = {classes.sidebar__chat__left}>
                    <p className = {classes.sidebar__chat__username}>Full Name</p>
                    <p className={classes.sidebar__chat__message}>Last message</p>
                </div>
                <div className = {classes.sidebar__chat__right}>
                    <p className={classes.sidebar__chat__time}>12.34 AM</p>
                </div>

            </div>
        </div>
    )
}

export default Chat
