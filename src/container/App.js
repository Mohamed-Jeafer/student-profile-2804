import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll/Scroll";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { setSearchField, requestStudents } from "../actions";

import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchStudents.searchField,
    studentsList: state.requestStudents.studentsList,
    isPending: state.requestStudents.isPending,
    error: state.requestStudents.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestStudents: () => dispatch(requestStudents()),
  };
};

class App extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "lightgrey";
    this.props.onRequestStudents();
  }

  render() {
    const { searchField, onSearchChange, studentsList, isPending } = this.props;
    if (studentsList) {
      const filteredStudents = studentsList.filter((student) => {
        let fullName = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
        return fullName.includes(searchField.toLowerCase());
      });
      return isPending ? (
        <h1>LOADING...</h1>
      ) : (
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
                <ErrorBoundary>
                  <CardList students={filteredStudents} />
                </ErrorBoundary>
              </Scroll>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 color="red"> ERROR </h1>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
