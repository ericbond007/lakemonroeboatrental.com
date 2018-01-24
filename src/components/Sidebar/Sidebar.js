import React from 'react';
import 'react-table/react-table.css'
import { Section, Container, Message } from 'reactbulma';




import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <Message primary>
      <Message.Header>
        Herro
      </Message.Header>
      <Message.Body>
        Lookie Here!~
      </Message.Body>
    </Message>
</div>
);

export default Sidebar;
