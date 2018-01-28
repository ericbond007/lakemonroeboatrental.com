import React from 'react';
import 'react-table/react-table.css'
import { Section, Container, Message } from 'reactbulma';




import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="card sidebar">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.header}</p>
          </div>
        </div>

        <div className="content">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
