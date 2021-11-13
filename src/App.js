import React, { Component } from 'react';
import "./App.css"
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'
import Scroll from "./components/Scroll/Scroll"
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentsList: [],
      searchField: ''
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

  onSearchChange = (event) => {
    return this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredStudents = this.state.studentsList.filter((student) => {
      let fullName = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`
      return fullName.includes(this.state.searchField.toLowerCase())
    })
    return (
      <div>
        <div className="header">
          <header>
            <h1>Student List</h1>
            <SearchBox searchChange={this.onSearchChange} />
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

export default App