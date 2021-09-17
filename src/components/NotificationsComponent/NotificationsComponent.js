import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import Badge from '@material-ui/core/Badge';
import { toggleFriendsModalOpen as toggleFriendsModalOpenAction } from '../../redux/actions/ui';
import './NotificationsComponent.css'

const NotificationsComponent = (props) => {
  const { friendsModalOpen, toggleFriendsModalOpen } = props;

  const notificationRoot = clsx(
    "notifications-root", {
      "notifications-rootOpen": friendsModalOpen
    }
  )

  const handleIconClick = () => {
    toggleFriendsModalOpen();
  }

  return (
    <div className={notificationRoot}>
      <div
        className="notifications-icon"
        onClick={handleIconClick}
      >
        <Badge
          badgeContent={20}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <PeopleIcon />
        </Badge>
      </div>
      <div
        className="notifications-icon"
        onClick={handleIconClick}
      >
        <Badge
          badgeContent={20}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <NotificationsIcon />
        </Badge>
      </div>
      <div
        className="notifications-icon"
        onClick={handleIconClick}
      >
        <Badge
          badgeContent={20}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <ChatIcon />
        </Badge>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  friendsModalOpen: state.ui.friendsModalOpen
})

const mapDispatchToProps = {
  toggleFriendsModalOpen: toggleFriendsModalOpenAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
