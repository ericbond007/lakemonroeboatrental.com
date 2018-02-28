import React, { Component } from 'react';
import ReactTable from 'react-table';
import './react-table.css'
import { Section, Container } from 'reactbulma';
import MobileRateCard from './MobileRateCard';




import './Rates.css';

class Rates extends Component {

  render() {


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
      },
      {
        Header: 'Deposit',
        accessor: 'deposit'
      }

    ]
    if (this.props.boats[0] !== undefined) {
    return (
      <div className="rates">
        <div className="columns is-desktop is-centered">
          <div className="column is-auto is-narrow">
      
      <Section className="ratesPage">
              <h1 className="title is-1">Boat Rental Rates</h1>
              <p className="is-size-4-desktop is-size-3-touch">Please call 812-837-9909 to make your reservation today!</p>
              <ReactTable
                data={
                  [
      {
      boat: '20\' Pontoon',
      capacity: this.props.pontoon.acf.max_capacity,
      onehour: this.props.pontoon.acf.rates_onehour,
      xtrahour: this.props.pontoon.acf.rates_extra_hour,
      fourhour: this.props.pontoon.acf.rates_fourhour,
      eighthour: this.props.pontoon.acf.rates_eighthour,
      allday: this.props.pontoon.acf.rates_all_day,
      evening: this.props.pontoon.acf.rates_evening,
      overnight: this.props.pontoon.acf.rates_overnight,
      oneday: this.props.pontoon.acf.rates_oneday,
      threeday: this.props.pontoon.acf.rates_threeday,
      weekly: this.props.pontoon.acf.rates_weekly,
      deposit: this.props.pontoon.acf.deposit
    },
      {
      boat: '24\' Pontoon',
      capacity: this.props.pontoon24.acf.max_capacity,
      onehour: this.props.pontoon24.acf.rates_onehour,
      xtrahour: this.props.pontoon24.acf.rates_extra_hour,
      fourhour: this.props.pontoon24.acf.rates_fourhour,
      eighthour: this.props.pontoon24.acf.rates_eighthour,
      allday: this.props.pontoon24.acf.rates_all_day,
      evening: this.props.pontoon24.acf.rates_evening,
      overnight: this.props.pontoon24.acf.rates_overnight,
      oneday: this.props.pontoon24.acf.rates_oneday,
      threeday: this.props.pontoon24.acf.rates_threeday,
      weekly: this.props.pontoon24.acf.rates_weekly,
      deposit: this.props.pontoon24.acf.deposit
    },
      {
      boat: '28\' Pontoon',
      capacity: this.props.pontoon28.acf.max_capacity,
      onehour: this.props.pontoon28.acf.rates_onehour,
      xtrahour: this.props.pontoon28.acf.rates_extra_hour,
      fourhour: this.props.pontoon28.acf.rates_fourhour,
      eighthour: this.props.pontoon28.acf.rates_eighthour,
      allday: this.props.pontoon28.acf.rates_all_day,
      evening: this.props.pontoon28.acf.rates_evening,
      overnight: this.props.pontoon28.acf.rates_overnight,
      oneday: this.props.pontoon28.acf.rates_oneday,
      threeday: this.props.pontoon28.acf.rates_threeday,
      weekly: this.props.pontoon28.acf.rates_weekly,
      deposit: this.props.pontoon28.acf.deposit
    },
      {
      boat: '34\' Double Decker',
      capacity: this.props.doubleD.acf.max_capacity,
      onehour: this.props.doubleD.acf.rates_onehour,
      xtrahour: this.props.doubleD.acf.rates_extra_hour,
      fourhour: this.props.doubleD.acf.rates_fourhour,
      eighthour: this.props.doubleD.acf.rates_eighthour,
      allday: this.props.doubleD.acf.rates_all_day,
      evening: this.props.doubleD.acf.rates_evening,
      overnight: this.props.doubleD.acf.rates_overnight,
      oneday: this.props.doubleD.acf.rates_oneday,
      threeday: this.props.doubleD.acf.rates_threeday,
      weekly: this.props.doubleD.acf.rates_weekly,
      deposit: this.props.doubleD.acf.deposit
    },
      {
      boat: 'Ski Boat',
      capacity: this.props.skiboat.acf.max_capacity,
      onehour: this.props.skiboat.acf.rates_onehour,
      xtrahour: this.props.skiboat.acf.rates_extra_hour,
      fourhour: this.props.skiboat.acf.rates_fourhour,
      eighthour: this.props.skiboat.acf.rates_eighthour,
      allday: this.props.skiboat.acf.rates_all_day,
      evening: this.props.skiboat.acf.rates_evening,
      overnight: this.props.skiboat.acf.rates_overnight,
      oneday: this.props.skiboat.acf.rates_oneday,
      threeday: this.props.skiboat.acf.rates_threeday,
      weekly: this.props.skiboat.acf.rates_weekly,
      deposit: this.props.skiboat.acf.deposit
    },
      {
      boat: 'Jet Ski',
      capacity: this.props.jetski.acf.max_capacity,
      onehour: this.props.jetski.acf.rates_onehour,
      xtrahour: this.props.jetski.acf.rates_extra_hour,
      fourhour: this.props.jetski.acf.rates_fourhour,
      eighthour: this.props.jetski.acf.rates_eighthour,
      allday: this.props.jetski.acf.rates_all_day,
      evening: this.props.jetski.acf.rates_evening,
      overnight: this.props.jetski.acf.rates_overnight,
      oneday: this.props.jetski.acf.rates_oneday,
      threeday: this.props.jetski.acf.rates_threeday,
      weekly: this.props.jetski.acf.rates_weekly,
      deposit: this.props.jetski.acf.deposit
    },
      {
      boat: '16\' Fishing Boat',
      capacity: this.props.fishingboat.acf.max_capacity,
      onehour: this.props.fishingboat.acf.rates_onehour,
      xtrahour: this.props.fishingboat.acf.rates_extra_hour,
      fourhour: this.props.fishingboat.acf.rates_fourhour,
      eighthour: this.props.fishingboat.acf.rates_eighthour,
      allday: this.props.fishingboat.acf.rates_all_day,
      evening: this.props.fishingboat.acf.rates_evening,
      overnight: this.props.fishingboat.acf.rates_overnight,
      oneday: this.props.fishingboat.acf.rates_oneday,
      threeday: this.props.fishingboat.acf.rates_threeday,
      weekly: this.props.fishingboat.acf.rates_weekly,
      deposit: this.props.fishingboat.acf.deposit
    },
      {
        boat: 'Canoe, Kayak, Paddleboard',
      capacity: this.props.kayak.acf.max_capacity,
      onehour: this.props.kayak.acf.rates_onehour,
      xtrahour: this.props.kayak.acf.rates_extra_hour,
      fourhour: this.props.kayak.acf.rates_fourhour,
      eighthour: this.props.kayak.acf.rates_eighthour,
      allday: this.props.kayak.acf.rates_all_day,
      evening: this.props.kayak.acf.rates_evening,
      overnight: this.props.kayak.acf.rates_overnight,
      oneday: this.props.kayak.acf.rates_oneday,
      threeday: this.props.kayak.acf.rates_threeday,
      weekly: this.props.kayak.acf.rates_weekly,
      deposit: this.props.kayak.acf.deposit
    },
                  ]
                }
                columns={columns}
                showPagination={false}
                className="-striped priceTable is-hidden-touch"
                sortable={false}
                style={{ }}
                defaultPageSize={8}
                resizable={false}

              />
            <div className="is-hidden-desktop">
                <MobileRateCard messageName="20' Pontoon" boat={this.props.pontoon} />
                <MobileRateCard messageName="24' Pontoon" boat={this.props.pontoon24} />
                <MobileRateCard messageName="28' Pontoon" boat={this.props.pontoon28}/>
                <MobileRateCard messageName="34' Double Decker" boat={this.props.doubleD}/>
                <MobileRateCard messageName="Ski Boat" boat={this.props.skiboat}/>
                <MobileRateCard messageName="Jet Ski" boat={this.props.jetski}/>
                <MobileRateCard messageName="16' Fishing Boat" boat={this.props.fishingboat}/>
                <MobileRateCard messageName="Canoes & Kayaks" boat={this.props.kayak}/>
              </div>
            </Section>
            </div>
          </div>
      </div>
      );
      } else {
        return null;
      }
      }
      }


export default Rates;
