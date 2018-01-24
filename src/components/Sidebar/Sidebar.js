import React from 'react';
import 'react-table/react-table.css'
import { Section, Container, Message } from 'reactbulma';




import './Sidebar.css';

const Sidebar = (props) => (
  <div className="sidebar">
    <Message primary>
      <Message.Header>
        {props.header ? <div>{props.header}</div> : <div>header</div>}
      </Message.Header>
      <Message.Body>
        {props.body ? <div>{props.body}</div> : <div>herro</div>}
      </Message.Body>
    </Message>
</div>
);

export default Sidebar;
