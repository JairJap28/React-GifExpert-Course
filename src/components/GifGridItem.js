import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img className="img__normal" src={url} alt={title}/>
            <img className="img__blur" src={url} alt={`blur ${title}`}/>
            <p>{title || 'No title description'}</p>
        </div>
    )
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}