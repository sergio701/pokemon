import React, {Component} from 'react';

class EventsTable extends Component {
    
    render() {
        return (<table className="table events-table">
            <tr class="events-table-header">
                <th>Event Name</th>
                <th>Date</th>
                <th>Venue</th>
                <th>City</th>
                <th>State</th>
            </tr>
            {this.props.events.map((event)=>{
                return (
                    <tr>
                        <td>{event.name}</td>
                        <td>{event.date}</td>
                        <td>{event.venue.name}</td>
                        <td>{event.venue.city}</td>
                        <td>{event.venue.state}</td>
                    </tr>
                )
            })}
        </table>);
    }
}

export default EventsTable;
