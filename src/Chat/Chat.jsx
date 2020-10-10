import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import classes from './Chat.module.css';

function Chat() {
    return (
        <div className = {classes.chat}>
            <div className = {classes.chat__header}>
                <div className={classes.chat__avatar}>
                    <Avatar />
                </div>
                <div className={classes.chat__details}>
                    <div className={classes.sidebar__chat__left}>
                        <p className={classes.sidebar__chat__username}>Full Name</p>
                        <p className={classes.sidebar__chat__message}>last Seen today 10:00 AM</p>
                    </div>
                    </div>
                <div className={classes.chat__header__right}>
                    <IconButton>
                        <SearchIcon style={{ fill: '#A0A2A5' }} />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon style={{ fill: '#A0A2A5' }} className={classes.chat__more__icon} />
                    </IconButton>
                    
                </div>
            </div>

            <div className={classes.chat__body}>
            </div>

            <div className={classes.chat__footer}>
                <IconButton>
                    <InsertEmoticonIcon style={{ fill: '#A0A2A5' }} />
                </IconButton>
                <IconButton>
                    <AttachFileIcon style={{ fill: '#A0A2A5' }} />
                </IconButton>    
                    <div className={classes.chat__message__input}>
                        <input placeholder='    Type a message' type="text" />
                    </div>
                <IconButton>
                    <MicNoneIcon style={{ fill: '#A0A2A5' }} />
                </IconButton>             
            </div>
        </div>
    )
}

export default Chat
