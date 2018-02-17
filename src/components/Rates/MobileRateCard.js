import React, { Component } from 'react';

class MobileRateCard extends Component {
  constructor(props) {
    super();
    this.toggleMessage = this.toggleMessage.bind(this);
    this.state = {
      ...props,
      condition: false
    }
  }

  toggleMessage() {
    this.setState(prevState => ({
      condition: !prevState.condition
    }));
  }

  render() {
    return (
			<div className="message is-primary has-text-centered" onClick={this.toggleMessage}>  
				<div className="message-header has-text-centered is-size-3-mobile" style={{display: 'block'}}>                                 
					<p style={{display: 'block'}}className="has-text-centered is-centered">{this.props.messageName}</p>                                             
				</div>                                                           
				<div className={this.state.condition ? "message-body": "message- body is-hidden"}>                                                                  
          <div className="boatRates is-size-4-touch">
          <div className="ratesRow">
            <div className="boatLeft">One Hour:</div>
            <div className="boatRight"> {this.props.boat.acf.rates_onehour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Extra Hour:</div>
            <div className="boatRight">{this.props.boat.acf.rates_extra_hour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Four Hours:</div>
            <div className="boatRight">{this.props.boat.acf.rates_fourhour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Eight Hours:</div>
            <div className="boatRight">{this.props.boat.acf.rates_eighthour}</div>
          </div>
          {this.props.boat.acf.rates_allday ?
          <div className="ratesRow">
            <div className="boatLeft">All Day:</div>
            <div className="boatRight">{this.props.boat.acf.rates_all_day}</div>
          </div>: null}
          {this.props.boat.acf.rates_evening ?
          <div className="ratesRow">
            <div className="boatLeft">Evening:</div>
            <div className="boatRight">{this.props.boat.acf.rates_evening}</div>
          </div>: null}
          {this.props.boat.acf.rates_overnight ?
          <div className="ratesRow">
            <div className="boatLeft">Overnight:</div>
            <div className="boatRight">{this.props.boat.acf.rates_overnight}</div>
          </div>: null}
          {this.props.boat.acf.rates_oneday ?
          <div className="ratesRow">
            <div className="boatLeft">24 Hours:</div>
            <div className="boatRight">{this.props.boat.acf.rates_oneday}</div>
          </div>: null}
          {this.props.boat.acf.rates_threeday ?
          <div className="ratesRow">
            <div className="boatLeft">Three Days:</div>
            <div className="boatRight">{this.props.boat.acf.rates_threeday}</div>
          </div> : null}
          {this.props.boat.acf.rates_weekly ?
          <div className="ratesRow">
            <div className="boatLeft">Weekly:</div>
            <div className="boatRight">{this.props.boat.acf.rates_weekly} </div>
          </div>: null}
          <div className="ratesRow">
            <div className="boatLeft">Deposit:</div>
            <div className="boatRight">{this.props.boat.acf.deposit}</div>
          </div>
        </div>
				</div>                                                           
			</div>
    );
  }
}

export default MobileRateCard;

