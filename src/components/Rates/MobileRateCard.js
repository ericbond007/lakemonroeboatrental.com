import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import './MobileRateCard.css';

class MobileRateCard extends Component {
  constructor(props) {
    super();
    this.toggleMessage = this.toggleMessage.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.state = {
      ...props,
      condition: true,
      show: false
    }
  }

  handleSlide() {
    this.setState({ show: !this.state.show });
  }

  toggleMessage() {
    this.setState(prevState => ({
      condition: !prevState.condition
    }));
  }

  render() {
    return (
      <Slide bottom>
			<div className="message is-primary has-text-centered" onClick={this.handleSlide} id="mobileboat">  
          <div className="message-header has-text-centered is-size-3-mobile ripple" style={{display: 'block', zIndex: '9999'}}>                                 
					<p style={{display: 'block'}}className="has-text-centered is-centered">{this.props.messageName}</p>                                             
				</div>                                                           
        <Slide top collapse when={this.state.show}>
				<div className={this.state.condition ? "message-body mobileboatbutton": "mobileboatbutton message-body hidden"}> 
          <div className="boatRates is-size-4-touch">
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">One Hour:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_onehour}</div>
          </Slide>
          </div>
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Extra Hour:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_extra_hour}</div>
          </Slide>
          </div>
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Four Hours:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_fourhour}</div>
          </Slide>
          </div>
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Eight Hours:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_eighthour}</div>
          </Slide>
          </div>
          {this.props.boat.acf.rates_allday ?
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">All Day:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_all_day}</div>
          </Slide>
          </div>: null}
          {this.props.boat.acf.rates_evening ?
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Evening:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_evening}</div>
          </Slide>
          </div>: null}
          {this.props.boat.acf.rates_overnight ?
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Overnight:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_overnight}</div>
          </Slide>
          </div>: null}
          {this.props.boat.acf.rates_oneday ?
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">24 Hours:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_oneday}</div>
          </Slide>
          </div>: null}
          {this.props.boat.acf.rates_threeday ?
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Three Days:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_threeday}</div>
          </Slide>
          </div> : null}
          {this.props.boat.acf.rates_weekly ?
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Weekly:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.rates_weekly} </div>
          </Slide>
          </div>: null}
          <div className="ratesRow">
            <Slide left duration={500}>
            <div className="boatLeft">Deposit:</div>
          </Slide>
          <Slide right duration={500}>
            <div className="boatRight">${this.props.boat.acf.deposit}</div>
          </Slide>
          </div>
        </div>
				</div>                                                           
      </Slide>
    </div>
  </Slide>
    );
  }
}

export default MobileRateCard;

