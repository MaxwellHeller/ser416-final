import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from "./Blog";
import Album from "./Album";
import Donation from "./Donation"

class App extends Component {

    constructor(){
        super();
        this.state = {
            comp: '',
            type: 'Customer'
        };

        this.switchTo = this.switchTo.bind(this);
    }

    switchTo(title) {
        console.log(title);

        /*
        switch (title) {
            case 'Donation':
                this.setState({
                    comp: <Donation/>
                });
                break;
            case 'Services':
                this.setState({
                    comp: <Album view={'customer'}/>
                });
                break;
            case 'Booking':
                this.setState({
                    comp: <Album view={'Employee'}/>
                });
                break;
            default:
                this.setState({comp: ''});
            break;
        }
        */
    }


    render() {

            return (
                <div className="Main">
                    <header>
                        <Blog click={this.switchTo}/>
                    </header>
                </div>
            );
  }
}

export default App;
