import React, { Component }from 'react';
import "./App.css"
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

class App extends Component {
  constructor() {
    super();
    this.state = {
      studentsList :[],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
    .then(response => response.json())
    .then(studentsobj => {
      this.setState({studentsList: studentsobj.students})
    }).catch(err => console.error(err))
  }
  
  onSearchChange = (event) => {
    return this.setState({searchField : event.target.value})
  }
  
  render() {
    const filteredStudents = this.state.studentsList.filter((student)=>{
      let fullName = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`
      return fullName.includes(this.state.searchField.toLowerCase())
    })
    console.log(filteredStudents)
    return (
      <div className="text-center">
        <h1>Student List</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList students={filteredStudents} />
      </div>
    )
  }
}

export default App