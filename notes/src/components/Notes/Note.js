import React from 'react';
import PropTypes from 'prop-types';

import { NoteStyle } from './noteStyle';

function Note(props) {
    const description = props.note.textBody;
    const title = props.note.title;

    return (
        <NoteStyle>
            <h3>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</h3>
            <p>
                {description.length > 140
                    ? `${description.slice(0, 140)}...`
                    : description}
            </p>
        </NoteStyle>
    );
}

Note.propTypes = {
    note: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        textBody: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
};

export default Note;
