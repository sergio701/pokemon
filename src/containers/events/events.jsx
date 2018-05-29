import React, {Component} from 'react';
import VividSeats from '../../event-service-module'
import EventsTable from '../../components/eventsTable/eventsTable'
import Modal from '../../components/modal/modal'


class Events extends Component {
    state = {
        events: [],
        addEvent: false
    };

    componentDidMount() {
        VividSeats.eventService.all((data)=>{
            this.setState({events: data});
        }, () =>{
            alert("error");
        })
    }

    showModal = () => {
        this.setState({addEvent: true});
    }

    hideModal = () => {
        this.setState({addEvent: false});
    }

    addEvent = (event) => {
       const {events} = this.state;
        events.push(event);

        this.setState({events: events});
    }

    render() {
        return (<div className="container">
            <div>
                <ul className="nav nav-tabs">
                    <li className="tab">
                        <a>
                            All Events</a>
                    </li>
                    <li className="tab">
                        <a>
                            Upcoming Events</a>
                    </li>
                    <li className="tab">
                        <a>
                            Local Events</a>
                    </li>
                </ul>
                    <EventsTable events={this.state.events} />
                <button onClick={this.showModal}>
                    Add Event
                </button>
            </div>
            {this.state.addEvent ? (<Modal onSave={VividSeats.eventService.add} hideModal={this.hideModal} addEvent={this.addEvent} />) : null}
        </div>
        );
  }
}

export default Events;
