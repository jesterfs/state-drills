import React from 'react';
import './Bomb.css';

class Bomb extends React.Component {
    state = {
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }))
        }, 1000)
    }

    componentWillUnmount() {
      
        clearInterval(this.myInterval)
    }

    render() {
        const { seconds } = this.state
        let message;
        if( seconds  >= 8) {
          message = 'BOOM!'
        } else if ( seconds % 2 === 0 && seconds  > 0) {
          message = 'Tick'
        } else if ( seconds % 2 !== 0 && seconds > 0) {
          message = 'Tock'
        }

        return (
            <div>
                <h1>{ message }</h1>
            </div>
        )
    }
}


export default Bomb
