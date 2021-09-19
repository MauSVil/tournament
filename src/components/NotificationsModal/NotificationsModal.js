import React, { useState, useContext } from 'react';
import { connect } from 'react-redux'
import clsx from 'clsx';
import _ from 'lodash';
import './NotificationsModal.css'
import { toggleFriendsModalOpen as toggleFriendsModalOpenAction } from '../../redux/actions/ui';
import { SocketContext } from '../../Providers/SocketProvider';

const NotificationsModal = (props) => {
  const { toggleFriendsModalOpen, friendsModalOpen, userInfo } = props;

  const socket = useContext(SocketContext);

  const [xAxisInitial, setXAxisInitial] = useState(0);

  const handleDragStart = (e) => {
    setXAxisInitial(e.screenX)
  };

  const handleDragEnd = (e) => {
    if (xAxisInitial - e.screenX > 10) {
      toggleFriendsModalOpen();
    }
    if (xAxisInitial - e.screenX < 10) {
      toggleFriendsModalOpen();
    }
  };

  const draggableContainerClass = clsx(
    "routes-draggableContainer", {
      "routes-draggableContainerOpen": friendsModalOpen
    }
  );

  const dragItemClass = clsx(
    "routes-dragItem", {
      "routes-dragItemOpen": friendsModalOpen
    }
  );

  const draggableContent = clsx(
    "routes-draggableContent", {
      "routes-draggableContentOpen": friendsModalOpen
    }
  );

  const friends = _.get(userInfo, 'friends', []);

  const handleFriendClick = (friend) => {
    socket.emit('notification', { from: userInfo.email, to: friend.email, message: `Hello from ${userInfo.name}` })
  };

  return (
    <div className={draggableContainerClass}>
      <div
        className={dragItemClass}
        draggable
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      />
      <div className={draggableContent}>
        {friends.map((el) => (
          <div className="routes-friendContainer" onClick={() => handleFriendClick(el)}>
            <div className="routes-friendAvatar" />
            <div className="routes-friendDesc">
              <p className="routes-friendName">{el.name}</p>
              <p className="routes-friendDescr">{el.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friendsModalOpen: state.ui.friendsModalOpen,
    userInfo: state.ui.userInfo,
  }
}

const mapDispatchToProps = {
  toggleFriendsModalOpen: toggleFriendsModalOpenAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsModal);