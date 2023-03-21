import React from 'react';

const AudioList = ({path}) => {
    return (
        <div>
            {path.map((p, index) => <h4>{p} {index}</h4>)}
        </div>
    );
}

export default AudioList;
