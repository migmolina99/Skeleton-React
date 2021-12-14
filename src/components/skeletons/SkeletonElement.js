import React from 'react';
import './Skeleton.css';

const SkeletonElement = ({ type }) => {
    return (
        <div className={`skeleton skeleton-${type}`}></div>
    );
}

export default SkeletonElement;