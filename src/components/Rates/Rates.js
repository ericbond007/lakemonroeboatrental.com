import React, { Component } from 'react';
import SEO from '../SEO';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import { Section, Container, Title, SubTitle } from 'reactbulma';




import './Rates.css';

class Rates extends Component {
  
  componentDidMount(prevProps) {
  }

  render() {
    const data = [{
      boat: 'Double Decker',
      capacity: this.,
      onehour: '$55',
      xtrahour: '$40',
      fourhour: '$150',
      eighthour: '$225',
      allday: '$245'
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    },
    {
      boat: '24ft Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255'
    
    }
    ]
    const columns = [
      {
        Header: 'Boats',
        accessor: 'boat'
      },
      {
        Header: 'Capacity',
        accessor: 'capacity'
      },
      {
        Header: '1st Hour',
        accessor: 'onehour'
      },
      {
        Header: 'Xtra Hour',
        accessor: 'xtrahour'
      },
      {
        Header: '4 Hours',
        accessor: 'fourhour'
      },
      {
        Header: '8 Hours',
        accessor: 'eighthour'
      },
      {
        Header: 'All Day',
        accessor: 'allday'
      }

    ]
    return (
      <div>
        <SEO
          title="Rates | Lake Monroe Boat Rental"
          description="Located in Paynetown SRA"
          path="/"
        />
      
      <Section className="content">
      <Container>
              <h1 className="landingTitle">Pricelist</h1>
              <ReactTable
                data={data}
                columns={columns}
                showPagination={false}
                className="-striped -highlight priceTable"
                style={{ }}
                defaultPageSize={8}
                resizable={false}

              />
        </Container>
            </Section>
      </div>

    );
  }
}

export default Rates;
