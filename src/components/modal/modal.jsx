import React, {Component} from 'react';

class Modal extends Component {
state={
    event_name: ''
}
    saveEvent = (e) => {
        e.preventDefault();
        let event = {
            name: this.state.event_name,
            "id" : 132,
            "date" : "2018/05/05",
            "venue" : {
              "id" : 3244,
              "name" : "Civic Opera House",
              "city" : "Chicago",
              "state" : "IL"
            }
        }
        console.log(event);
        this.props.onSave(event, ()=>{
            this.props.addEvent(event);
        },()=>{
            alert("FAIL");
        });

        return false;
    }

    controlInput = (el)=>{
        const value = el.target.value;
        this.setState({event_name: value})
    }

    render() {
        return (<div id="add-Event-Modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">
                            Add New Event</h4>
                    </div>
                    <div className="modal-body">
                        <form name="addEventForm">
                            <p>
                                Event Information</p>
                            <input placeholder="Event Name" value={this.state.event_name} ref={this.eventName} onChange={this.controlInput}/>
                            <input placeholder="Date" id="add-event-date" ref={this.eventDate}/>
                            <input placeholder="Time" id="add-event-time" ref={this.eventTime}/>
                            <p>
                                Venue Information</p>
                            <input placeholder="Venue Name" ref={this.eventVenueName}/>
                            <input placeholder="Venue City" ref={this.eventVenueCity}/>
                            <select name="state" size="1" ref={this.eventVenueState}>
                                <option value="AK">AK</option>
                                <option value="AL">AL</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VA">VA</option>
                                <option value="VT">VT</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                            <div className="modal-footer">
                                <button type="button" onClick={this.props.hideModal}>Close</button>
                                <button type="submit" onClick={this.saveEvent}>Add Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Modal;
