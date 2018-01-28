import React, { Component } from 'react';
import SEO from '../SEO';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import { Section, Container, Title, SubTitle } from 'reactbulma';




import './Rates.css';

class Rates extends Component {
  
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const data = [
      {
      boat: '20\' Pontoon',
      capacity: '8',
      onehour: '$55',
      xtrahour: '$40',
      fourhour: '$150',
      eighthour: '$225',
      allday: '$245',
      evening: '$95',
      overnight: '$200',
      oneday: '$265',
      threeday: '$675',
      weekly: '$1150',
      deposit: '$200'
    },
      {
      boat: '24\' Pontoon',
      capacity: '10',
      onehour: '$60',
      xtrahour: '$40',
      fourhour: '$160',
      eighthour: '$235',
      allday: '$255',
      evening: '$100',
      overnight: '$215',
      oneday: '$275',
      threeday: '$700',
      weekly: '$1200',
      deposit: '$200'
    },
      {
      boat: '28\' Pontoon',
      capacity: '12',
      onehour: '$65',
      xtrahour: '$40',
      fourhour: '$170',
      eighthour: '$245',
      allday: '$265',
      evening: '$105',
      overnight: '$230',
      oneday: '$290',
      threeday: '$750',
      weekly: '$1250',
      deposit: '$200'
    },
      {
      boat: '34\' Double Decker',
      capacity: '24',
      onehour: '$105',
      xtrahour: '$75',
      fourhour: '$305',
      eighthour: '$435',
      allday: '$460',
      evening: '$180',
      overnight: '$340',
      oneday: '$480',
      threeday: '$1300',
      weekly: '',
      deposit: '$300'
    },
      {
      boat: 'Ski Boat',
      capacity: '6',
      onehour: '$90',
      xtrahour: '$90',
      fourhour: '$295',
      eighthour: '$415',
      allday: '$460',
      evening: '',
      overnight: '',
      oneday: '',
      threeday: '',
      weekly: '',
        deposit: '$300'
    },
      {
      boat: 'Jet Ski',
      capacity: '2',
      onehour: '$85',
      xtrahour: '$85',
      fourhour: '$275',
      eighthour: '$395',
      allday: '',
      evening: '',
      overnight: '',
      oneday: '',
      threeday: '',
      weekly: '',
        deposit: '$300'
    },
      {
      boat: '16\' Fishing Boat',
      capacity: '2',
      onehour: '$45',
      xtrahour: '$20',
      fourhour: '$100',
      eighthour: '$135',
      allday: '$150',
      evening: '',
      overnight: '$110',
      oneday: '$165',
      threeday: '$360',
      weekly: '$580',
        deposit: '$100'
    },
      {
        boat: 'Canoe, Kayak, Paddleboard',
      capacity: '1-3',
      onehour: '$15',
      xtrahour: '$10',
      fourhour: '$35',
      eighthour: '$45',
      allday: '$48',
      evening: '',
      overnight: '$35',
      oneday: '$50',
      threeday: '$100',
      weekly: '$180',
        deposit: '$50'
    },
    ]
    const columns = [
      {
        Header: 'Boats',
        accessor: 'boat',
        width: 150
      },
      {
        Header: 'Capacity',
        accessor: 'capacity'
      },
      {
        Header: 'Deposit',
        accessor: 'deposit'
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
      },
      {
        Header: 'Evening',
        accessor: 'evening'
      },
      {
        Header: 'Overnight',
        accessor: 'overnight'
      },
      {
        Header: '24 Hours',
        accessor: 'oneday'
      },
      {
        Header: '3 Days',
        accessor: 'threeday'
      },
      {
        Header: 'Weekly',
        accessor: 'weekly'
      }

    ]
    return (
      <div>
      
      <Section className="content is-hidden-mobile">
      <Container>
              <h1 className="title">Boat Rental Rates</h1>
              <p className="is-size-4-desktop">Please call 812-837-9909 for more info!</p>
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
