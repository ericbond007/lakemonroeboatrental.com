import React, { Component } from 'react';
import './MobileRateCard.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-101048517-2');

class MobileRateCard extends Component {
  constructor(props) {
    super();
  this.handleSlide = this.handleSlide.bind(this);
    this.state = {
      ...props,
      show: false
    }
  }
handleSlide() {
    this.setState({ show: !this.state.show });
    ReactGA.event({
      category: 'Mobile Interactions',
      action: 'Clicked Mobile Boat Rate Button',
      label: 'Mobile Boat Rate Button'
    });
  }

  render() {
    return (
       <div className="message is-primary has-text-centered" onClick={this.handleSlide}>
          <div className="message-header has-text-centered is-size-3-mobile ripple mobileRatesHeader" style={{display: 'block', zIndex: '1'}}>                                 
					<p style={{display: 'block'}}className="has-text-centered is-centered">{this.props.messageName}</p>                                             
				</div>                                                           
				<div className={this.state.show ? "message-body mobileboatbutton": "mobileboatbutton message-body hidden"}> 
          <div className="boatRates is-size-4-touch">
          <div className="ratesRow">
            
            <div className="boatLeft">One Hour:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_onehour}</div>
          
          </div>
          <div className="ratesRow">
            
            <div className="boatLeft">Extra Hour:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_extra_hour}</div>
          
          </div>
          <div className="ratesRow">
            
            <div className="boatLeft">Four Hours:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_fourhour}</div>
          
          </div>
          <div className="ratesRow">
            
            <div className="boatLeft">Eight Hours:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_eighthour}</div>
          
          </div>
          {(this.props.boat.acf.rates_all_day !== 'N/A') ?
          <div className="ratesRow">
            
            <div className="boatLeft">All Day:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_all_day}</div>
          
          </div>: 
          <div className="ratesRow">
            
            <div className="boatLeft">All Day:</div>
          
          
            <div className="boatRight">{this.props.boat.acf.rates_all_day}</div>
            </div>
          }
          {(this.props.boat.acf.rates_evening !== 'N/A') ?
          <div className="ratesRow">
            
            <div className="boatLeft">Evening:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_evening}</div>
          
          </div>: 
          <div className="ratesRow">
            
            <div className="boatLeft">Evening:</div>
          
          
            <div className="boatRight">{this.props.boat.acf.rates_evening}</div>
          
          </div>}
          {(this.props.boat.acf.rates_overnight !== 'N/A') ?
          <div className="ratesRow">
            
            <div className="boatLeft">Overnight:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_overnight}</div>
          
          </div>:
          <div className="ratesRow">
            
            <div className="boatLeft">Overnight:</div>
          
          
            <div className="boatRight">{this.props.boat.acf.rates_overnight}</div>

          </div>          
          }
          {(this.props.boat.acf.rates_oneday !== 'N/A') ?
          <div className="ratesRow">
            
            <div className="boatLeft">24 Hours:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_oneday}</div>
          
          </div>:
          <div className="ratesRow">
            
            <div className="boatLeft">24 Hours:</div>
          
          
            <div className="boatRight">{this.props.boat.acf.rates_oneday}</div>
          
          </div>
          }
          {(this.props.boat.acf.rates_threeday !== 'N/A' && this.props.boat.acf.rates_threeday !== 'call') ?
          <div className="ratesRow">
            
            <div className="boatLeft">Three Days:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_threeday}</div>
          
          </div> :
          <div className="ratesRow">
            
            <div className="boatLeft">Three Days:</div>
          
          
            <div className="boatRight">{this.props.boat.acf.rates_threeday}</div>
          
          </div> 
          }
          {(this.props.boat.acf.rates_weekly !== 'N/A' && this.props.boat.acf.rates_weekly !== 'call') ?
          <div className="ratesRow">
            
            <div className="boatLeft">Weekly:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.rates_weekly} </div>
          
          </div>: 
          <div className="ratesRow">
            
            <div className="boatLeft">Weekly:</div>
          
          
            <div className="boatRight">{this.props.boat.acf.rates_weekly} </div>
          
          </div> 
          }
          <div className="ratesRow">
            
            <div className="boatLeft">Deposit:</div>
          
          
            <div className="boatRight">${this.props.boat.acf.deposit}</div>
          
          </div>
        </div>
				</div>                                                           
    </div>
    );
  }
}

export default MobileRateCard;

