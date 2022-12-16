import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackOptionsContainer>
            <Button type='button' name={options[0]} onClick={onLeaveFeedback}>Good</Button>
            <Button type='button' name={options[1]} onClick={onLeaveFeedback}>Neutral</Button>
            <Button type='button' name={options[2]} onClick={onLeaveFeedback}>Bad</Button>
        </FeedbackOptionsContainer>
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};


