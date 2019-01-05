import React, { Fragment } from 'react';

const Avatar = ({ url }) => {

    return (
        <Fragment>
            <div className='question-avatar'
                style={{
                    backgroundImage: `url(\"${url}\")`
                }}
            />
        </Fragment >
    );
};

export default Avatar;
