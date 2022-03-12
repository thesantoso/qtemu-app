import React from 'react';
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardText
} from 'reactstrap';
import { useSelector } from 'react-redux';

const NextMeetup = () => {
    const state = useSelector((state) => ({ ...state.events }));
    return (
        <>
            {state.events && state.events.map(event => {
                return (
                    <Card body className="d-flex flex-column" key={event.id}>
                        <CardTitle tag="h5">{event.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-4 text-muted">{event.date}</CardSubtitle>
                        <CardText>{event.description}</CardText>
                    </Card>)
            })}
        </>
    );
}

export default NextMeetup;