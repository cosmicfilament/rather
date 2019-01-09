import React from 'react';

const SubmitNewQuestion = ({ onSubmit }) => {

    return (
        <div className='new-question-button-wrapper' >
            <button
                type='button'
                className='new-question-button'
                onClick={(e) => onSubmit()}>
                Submit Question
            </button>
        </div >
    );
}

export default SubmitNewQuestion;
