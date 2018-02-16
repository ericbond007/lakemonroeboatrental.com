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
            <div className="boatRight"> {this.props.data.onehour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Extra Hour:</div>
            <div className="boatRight">{this.props.data.xtrahour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Four Hours:</div>
            <div className="boatRight">{this.props.data.fourhour}</div>
          </div>
          <div className="ratesRow">
            <div className="boatLeft">Eight Hours:</div>
            <div className="boatRight">{this.props.data.eighthour}</div>
          </div>
          {this.props.data.allday ?
          <div className="ratesRow">
            <div className="boatLeft">All Day:</div>
            <div className="boatRight">{this.props.data.allday}</div>
          </div>: null}
          {this.props.data.overnight ?
          <div className="ratesRow">
            <div className="boatLeft">Overnight:</div>
            <div className="boatRight">{this.props.data.overnight}</div>
          </div>: null}
          {this.props.data.oneday ?
          <div className="ratesRow">
            <div className="boatLeft">24 Hours:</div>
            <div className="boatRight">{this.props.data.oneday}</div>
          </div>: null}
          {this.props.data.threeday ?
          <div className="ratesRow">
            <div className="boatLeft">Three Days:</div>
            <div className="boatRight">{this.props.data.threeday}</div>
          </div> : null}
          {this.props.data.weekly ?
          <div className="ratesRow">
            <div className="boatLeft">Weekly:</div>
            <div className="boatRight">{this.props.data.weekly} </div>
          </div>: null}
          <div className="ratesRow">
            <div className="boatLeft">Deposit:</div>
            <div className="boatRight">{this.props.data.deposit}</div>
          </div>
        </div>
				</div>                                                           
			</div>
    );
  }
}

export default MobileRateCard;

