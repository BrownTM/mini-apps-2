import React from 'react';

const Event = (props) => {
  return (
    <tr>
      <td>{props.eventDetail.date}</td>
      <td>{props.eventDetail.description}</td>
      <td>{props.eventDetail.lang}</td>
    </tr>
  );
};

export default Event;
