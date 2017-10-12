import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Bringing all the code from the `react-router-dom` library, allowing us
// to create routes and also adds React Router syntax
// Router is ALWAYS going to go into the App.js [THE HIGHEST LEVEL OF APP]

/* IMPORT COMPONENTS */
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import DebitsView from './components/DebitsView'
import CreditsView from './components/CreditsView'


class App extends Component {

  state = {
    user: {
      userName: "Freddie Mercury",
      memberSince: "1946"
    },
    debitsData: [],
    creditsData: [],
  }


  getDebitsData = () => {
    axios
      .get("http://localhost:4000/debits")
      .then((response) => {
        const debitsData = response.data
        this.setState({ debitsData: debitsData })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getCreditsData = () => {
    axios
      .get("http://localhost:4000/credits")
      .then((response) => {
        const creditsData = response.data
        this.setState({ creditsData: creditsData })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getAccountBalance = () => {
    const totalCredits = this.state.creditsData.reduce((amount, credit) => {
      return totalCredits + credit.amount
    }, 0)

    const totalDebits = this.state.debitsData.reduce((amount, debit) => {
      return totalDebits + debit.amount
    }, 0)

    return totalCredits - totalDebits
  };

  componentWillMount = () => {
    this.getDebitsData()
    this.getCreditsData()
  }

  render() {

    const accountBalance = () => {

    }
    
    const AccountBalanceWrapper = () => {
      return (<AccountBalance
        accountBalance={this.state.accountBalance}
      />)
    }

    const UserProfileWrapper = () => {
      return (<UserProfile
        userName={this.state.user.userName}
        memberSince={this.state.user.memberSince}
      />)
    }

    const DebitsWrapper = () => {
      return (<DebitsView
        debitsData={this.state.debitsData}
        accountBalance={}
      />)
    }

    const CreditsWrapper = () => {
      return (<CreditsView
        creditsData={this.state.creditsData}
      />)
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route exact path="/:user" render={UserProfileWrapper} />
          <Route exact path="/debit" render={DebitsWrapper} />
          <Route exact path="/credit" render={CreditsWrapper} />
        </Switch>
      </Router>
    );
  }
}

export default App
