import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonItem = ({ name, profilePic, email }) => {
  return (
    <div className="skeleton-item">
      <div className="profile">{profilePic ? <img src={profilePic} alt="profile" className="profile-pic" /> : <Skeleton height={60} />}</div>

      <div className="info">
        <div className="name">{name || <Skeleton />}</div>
        <div className="email">{email || <Skeleton />}</div>
      </div>
    </div>
  );
};

const SkeletonDisplay = () => {
  return (
    <div className="skeleton">
      {Array.from(Array(6).keys()).map((i) => (
        <SkeletonItem key={i} />
      ))}
    </div>
  );
};

export default SkeletonDisplay;
