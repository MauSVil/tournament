import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import Badge from '@material-ui/core/Badge';
import _ from 'lodash';
import { toggleFriendsModalOpen as toggleFriendsModalOpenAction } from '../../redux/actions/ui';
import './NotificationsComponent.css'

const NotificationsComponent = (props) => {
  const { friendsModalOpen, toggleFriendsModalOpen, userInfo } = props;

  const notificationRoot = clsx(
    "notifications-root", {
      "notifications-rootOpen": friendsModalOpen
    }
  )

  const handleIconClick = () => {
    toggleFriendsModalOpen();
  }
  const notifications = _.get(userInfo, 'notifications', [])

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
          badgeContent={notifications.length}
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
  friendsModalOpen: state.ui.friendsModalOpen,
  userInfo: state.ui.userInfo,
})

const mapDispatchToProps = {
  toggleFriendsModalOpen: toggleFriendsModalOpenAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent);
