import React from 'react';

import NumberInput from './number-input';
import Output from './output';

// Update this component
export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          dayRate:0,
          hours:1
        }
    }
  
  setDayRate(dayRate){
    this.setState({dayRate})
  }
  setHours(hours){
    this.setState({hours})
  }

    render() {
        const rate = (this.state.dayRate/this.state.hours);
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} 
                  onChange={(dayRate)=>this.setDayRate(dayRate)}/>
                <NumberInput id="hours" label="Hours" min={1} max={12} 
                  onChange={(hours)=>this.setHours(hours)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}

