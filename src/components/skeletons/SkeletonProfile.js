import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonProfile = ({ theme }) => {
  return (
    <div className={`skeleton-wrapper skeleton-${theme}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

SkeletonProfile.defaultProps = {
  theme: 'light'
}

export default SkeletonProfile;
