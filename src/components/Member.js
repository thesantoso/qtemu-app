import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    componentDidMount() {
        fetch("https://swapi.dev/api/people")
            .then((response) => response.json())
            .then((data) => this.setState(({ people: data.results })));
    }
    render() {
        return (
            <>
                {this.state.people.map(p => {
                    return (
                        <Card body className="d-flex flex-row" key={p.name}>
                            <div>
                                <CardImg top style={{ width: "75px", height: "75px" }} className="rounded-circle" src="https://www.famousbirthdays.com/faces/jarin-gazi-image.jpg" alt="Card image cap" />
                            </div>
                            <div className="flex-grow-1 px-4">
                                <CardTitle tag="h5">Organizers</CardTitle>
                                <CardText>
                                    <span><b className="mr-2">{p.name}</b></span>
                                </CardText>
                            </div>
                        </Card>
                    )
                })}
            </>
        )
    }
}

export default Member;