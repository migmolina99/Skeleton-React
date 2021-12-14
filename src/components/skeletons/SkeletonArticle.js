import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const  SkeletonArticle = ({ theme }) => {
    return (
        <div className={`skeleton-wrapper skeleton-${theme}`}>
            <div className='skeleton-article'>
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div>
    );
}

SkeletonArticle.defaultProps = {
    theme: 'light'
}

export default SkeletonArticle;