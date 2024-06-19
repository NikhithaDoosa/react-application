import { Component } from 'react';

class Welcome extends Component {
   constructor() {
    super()
    this.state = {
        message : "Welcome Component"
    }
   }
   ChangesMessage() {
     this.setState({
        message: "Thank you for Subscribe"
     })
   }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.ChangesMessage()}>subscribe</button>
            </div>
        )

    }
}

export default Welcome