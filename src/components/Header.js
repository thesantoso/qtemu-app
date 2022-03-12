import React from 'react';
import {
    Button,
    Card,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

const Header = () => {
    return (
        <Card body className="d-flex flex-column flex-md-row text-center text-md-left">
            <div>
                <CardImg top style={{ width: "260px" }} src="https://siar.com/wp-content/uploads/2020/01/Hacktiv8-sekolah-pemrograman-berbentuk-bootcamp-Dok-SIAR.jpg" alt="Card image cap" />
            </div>
            <div className="flex-grow-1 px-0 px-md-4 mt-3 mt-md-0">
                <CardTitle tag="h5">Hacktiv8 Meetup</CardTitle>
                <CardText>
                    <span className="mr-2">Location: </span><b>Jakarta</b>
                </CardText>
                <CardText>
                    <span className="mr-2">Members: </span><b>1,078</b>
                </CardText>
                <CardText>
                    <span className="mr-2">Organizers: </span><b>Adhy Wirananta</b>
                </CardText>
                <Button color="primary">Join Us</Button>
            </div>
        </Card>
    );
}

export default Header;