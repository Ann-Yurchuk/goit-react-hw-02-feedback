import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notification.styled';

export const NotificationMessage = ({ message }) => {
    return (
        <Notification>{message}</Notification>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

