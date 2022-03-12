import React from "react";
import Header from '../components/Header';
import Title from '../components/Title';
import NextMeetup from '../components/NextMeetup';
import Member from '../components/Member';
import PastMeetups from '../components/PastMeetups';

const Home = () => {
    return (
        <>
            <section id="header">
                <Header />
            </section>
            <section id="next-meextup">
                <Title>Next Meetup</Title>
                <NextMeetup />
            </section>
            <section id="about-meetup">
                <Title>About Meetup</Title>
                <p>Come and meet other developers interested in the Javascript and it's library in the Greater Jakarta area</p>
                <p>Twitter: <a href="https://twitter.com/jakartajs">@JakartaJS</a> and we use the hashtag <a href="https://twitter.com/hashtag/jakartajs?src=hashtag_click">#JakartaJS</a></p>
            </section>
            <section id="members">
                <div className="d-flex flex-row justify-content-between">
                    <Title>Members</Title>
                    <a href="meetup.com">See All</a>
                </div>
                <Member />
            </section>
            <section id="past-meetups">
                <div className="d-flex flex-row justify-content-between">
                    <Title>Past Meetups</Title>
                    <a href="meetup.com">See All</a>
                </div>
                <PastMeetups />
            </section>
        </>
    );
};

export default Home;