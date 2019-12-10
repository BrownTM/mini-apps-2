import React from 'react';
import Event from './Event.jsx';

const EventsList = (props) => {
  let showHeader = () => {
    if (props.allEvents.length > 0) {
      return (
        <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Description</th>
          <th>Lang</th>
          <th>Category1</th>
          <th>Granularity</th>
        </tr>
      </thead>
      );
    }
  }
  return (
    <table>
      {showHeader()}
      <tbody>
        {props.allEvents.map((event) => {
          return (
            <Event eventDetail={event} key={event.id} />
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default EventsList;
