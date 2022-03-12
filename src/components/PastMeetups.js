import React from 'react';
import {
    Card,
    Button,
    CardTitle,
    CardText,
    CardDeck,
    CardBody,
    CardHeader,
} from 'reactstrap';

const PastMeetups = () => {
    return (
        <CardDeck className="flex-column flex-md-row">
            <Card className="mb-3 mb-md-0">
                <CardHeader>
                    <CardText tag="h5">27 November 2017</CardText>
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">#39 JakartaJS April Meetup with Kumparan</CardTitle>
                    <CardText>
                        <span><b>139</b> went</span>
                    </CardText>
                    <Button color="primary">View</Button>
                </CardBody>
            </Card>
            <Card className="mb-3 mb-md-0">
                <CardHeader>
                    <CardText tag="h5">27 October 2017</CardText>
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">#39 JakartaJS April Meetup with Blibli</CardTitle>
                    <CardText>
                        <span><b>113</b> went</span>
                    </CardText>
                    <Button color="primary">View</Button>
                </CardBody>
            </Card>
            <Card className="mb-3 mb-md-0">
                <CardHeader>
                    <CardText tag="h5">27 September 2017</CardText>
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">#37 JakartaJS April Meetup with Hacktiv8</CardTitle>
                    <CardText>
                        <span><b>110</b> went</span>
                    </CardText>
                    <Button color="primary">View</Button>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default PastMeetups;