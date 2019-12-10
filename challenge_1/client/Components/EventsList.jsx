import React from 'react';
import Event from './Event.jsx';

const EventsList = (props) => {
  let showHeader = () => {
    if (props.allEvents.length > 0) {
      return (
        <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Lang</th>
        </tr>
      </thead>
      );
    }
  }
  return (
    <table>
      {showHeader()}
      <tbody>
        {props.allEvents.map((event, i) => {
          return (
            <Event eventDetail={event} key={i} />
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default EventsList;
