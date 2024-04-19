import React, { useState, useEffect } from 'react';
import './OnHold.css';

export function OnHold(props) {
  const [remaining, setRemaining] = useState(props.duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemaining(remaining - 1);
    }, 1000);
    return function cleanup() {
      clearTimeout(timer);
    };
  });

  if (remaining <= 1) {
    return null;
  }
  
  return (
    <div className="OnHold">
      Your tickets are on hold for the next {remaining} seconds.
    </div>
  );
}


export class OnHoldClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { remaining: props.duration };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const remaining = this.state.remaining - 1;
      this.setState({ remaining });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { remaining } = this.state;
    if (remaining <= 1) {
      return null;
    }
    return (
      <div className="OnHold">
        Your tickets are on hold for the next {remaining} seconds.
      </div>
    );
  }
}
