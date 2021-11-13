import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from "../components/Scroll/Scroll";
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import { setSearchField } from '../actions';

import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {onSearchChange: (event) => dispatch(setSearchField(event.target.value))}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentsList: [],
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = "lightgrey"
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(studentsobj => {
        this.setState({ studentsList: studentsobj.students })
      }).catch(err => console.error(err))
  }


  render() {
    const { studentsList } = this.state
    const { searchField, onSearchChange } = this.props
    const filteredStudents = studentsList.filter((student) => {
      let fullName = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`
      return fullName.includes(searchField.toLowerCase())
    })
    return !studentsList.length ? <h1>LOADING...</h1> : (
      <div>
        <div className="header">
          <header>
            <h1>Student List</h1>
            <SearchBox searchChange={onSearchChange} />
          </header>
        </div>
        <div className="row align-self-center">
          <div className="col">
            <Scroll>
              <ErrorBoundry>
                <CardList students={filteredStudents} />
              </ErrorBoundry>  
            </Scroll>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)