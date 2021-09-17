import React, { useState } from 'react';
import { connect } from 'react-redux'
import clsx from 'clsx';
import './NotificationsModal.css'
import { toggleFriendsModalOpen as toggleFriendsModalOpenAction } from '../../redux/actions/ui';

const NotificationsModal = (props) => {
  const { toggleFriendsModalOpen, friendsModalOpen } = props;

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
  )

  const friends = [
    { name: 'Mauricio Sanchez Vilchis', descr: 'Friend 1' },
    { name: 'Mauricio Sanchez Vilchis', descr: 'Friend 1' },
    { name: 'Mauricio Sanchez Vilchis', descr: 'Friend 1' },
    { name: 'Mauricio Sanchez Vilchis', descr: 'Friend 1' },
    { name: 'Mauricio Sanchez Vilchis', descr: 'Friend 1' },
  ];

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
          <div className="routes-friendContainer">
            <div className="routes-friendAvatar" />
            <div className="routes-friendDesc">
              <p className="routes-friendName">{el.name}</p>
              <p className="routes-friendDescr">{el.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friendsModalOpen: state.ui.friendsModalOpen
  }
}

const mapDispatchToProps = {
  toggleFriendsModalOpen: toggleFriendsModalOpenAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsModal);