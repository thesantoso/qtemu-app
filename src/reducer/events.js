import { ADD_EVENT } from "../constants";

const initialState = {
  events: [
    { id: 1, title: "Awesome meetup and event", date:"10/7/2021, 10:48:17 PM", description: "Hello, Javascript & Node.js Ninjas! Get Ready for out monthly meetup JakartaJS! This will be our fifth meetup of 2018 The Meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. Remember to bring a photo ID to get through building security" }
  ]
}

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      const newEvent = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date
      }
      const addedEvents = [...state.events, newEvent];
      return {
        ...state,
        events: addedEvents
      }

    default:
      return state
  }
}

export default eventsReducer;
