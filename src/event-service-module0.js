/*
Provides access to a database of events.  Currently supports:
    all(onSuccess, onError):  calls onSuccess with the event list if successful, onError otherwise
    add(event, onSuccess, onError):  adds an event to the system,  Calls onSuccess if successful
*/

var VividSeats = (function() {
    //private collection and accessors
    const _getRandomDate = function(offset) {
      const today = new Date();
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);
      date.setDate(date.getDate() + offset );

      return date.toISOString();  
    }

    const _getRandomFutureDate = function() {
      const randomNumber = Math.ceil(Math.random() * 100);
      return _getRandomDate(randomNumber)

    }

    const _getRandomPastDate = function() {
      const randomNumber = Math.ceil(Math.random() * 100) * -1;
      return _getRandomDate(randomNumber)
    }

    var _events = [
        {
          "id" : 123,
          "name" : "Sesame Street Live - Elmo Makes Music",
          "date" : _getRandomPastDate(),
          "venue" : {
            "id" : 111,
            "name" : "Broome County Forum",
            "city" : "Binghamton",
            "state" : "NY"
          }
        },
        {
          "id" : 124,
          "name" : "2017 Australian Open",
          "date" : _getRandomPastDate(),
          "venue" : {
            "name" : "Rod Laver Arena",
            "city" : "Melbourne"
          }
        },
        {
          "id" : 125,
          "name" : "Mac King Comedy Magic Show",
          "date" : _getRandomFutureDate(),
          "venue" : {
            "id" : 300,
            "name" : "Harrah's Las Vegas Casino",
            "city" : "Las Vegas",
            "state" : "NV"
          }
        },
        {
          "id" : 126,
          "name" : "42nd Street",
          "date" : _getRandomPastDate(),
          "venue" : {
            "id" : 1200,
            "name" : "Paramount Theatre - IL",
            "city" : "Aurora",
            "state" : "IL"
          }
        },
        {
          "id" : 127,
          "name" : "Million Dollar Quartet",
          "date" : _getRandomPastDate(),
          "venue" : {
            "id" : 712,
            "name" : "Apollo Theater-IL",

            "city" : "Chicago",
            "state" : "IL"

          }
        },
        {
          "id" : 128,
          "name" : "Twelfth Night",
          "date" : _getRandomFutureDate(),
          "venue" : {
            "id" : 1665,
            "name" : "Belasco Theatre",
            "city" : "New York",
            "state" : "NY"
          }
        },
        {
          "id" : 129,
          "name" : "The Glass Menagerie",
          "date" : _getRandomFutureDate(),
          "venue" : {
            "id" : 2411,
            "name" : "Booth Theatre",
            "city" : "New York",
            "state" : "NY"
          }
        },
        {
          "id" : 130,
          "name" : "Cinderella - The Musical",
          "date" : _getRandomPastDate(),
          "venue" : {
            "id" : 2332,
            "name" : "Broadway Theatre-New York",
            "city" : "New York",
            "state" : "NY"

          }

        },
        {
          "id" : 131,
          "name" : "After Midnight",
          "date" : _getRandomFutureDate(),
          "venue" : {
            "id" : 2372,
            "name" : "Brooks Atkinson Theatre",
            "city" : "New York",
            "state" : "NY"
          }
        },
        {
          "id" : 132,
          "name" : "Die Fledermaus",
          "date" : _getRandomPastDate(),
          "venue" : {
            "id" : 3244,
            "name" : "Civic Opera House",
            "city" : "Chicago",
            "state" : "IL"
          }
        }
    ];

    var _addEvent = function(event) { _events.push(event); };
    var _allEvents = function() { return _deepCopy(_events)};
    var _deepCopy = function (obj) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            var out = [], i = 0, len = obj.length;
            for ( ; i < len; i++ ) {
                out[i] = _deepCopy(obj[i]);
            }
            return out;
        }
        if (typeof obj === 'object') {
            var out = {}, i;
            for ( i in obj ) {
                out[i] = _deepCopy(obj[i]);
            }
            return out;
        }

        return obj;
    };

    var _simulateNetwork = function(onSuccess, onError) {
        console.log()
        var callback = Math.random() <= 0.9 ? onSuccess : onError;
        setTimeout(function(){callback()}, Math.random() * 100);
    };


    return {
        eventService: {
            all: function(onSuccess, onError) {
                _simulateNetwork(function(){onSuccess(_allEvents());}, function(){onError("Oops, a server error occurred")});
            },
            add: function(event, onSuccess, onError) {
                _simulateNetwork(function(){onSuccess(_addEvent(event));}, function(){onError("Oops, a server error occurred")});
            }
        }
    }
})();

console.log(VividSeats);

export default VividSeats;
