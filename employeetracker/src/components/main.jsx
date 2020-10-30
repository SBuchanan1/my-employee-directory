import React, { Component } from "react";
import List from "./List";
import axios from "axios";

class MainPage extends Component {
  state = {
    employees: [],
    employeesToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  clearFilter = () => {
    this.setState({
      employeesToDisplay: this.state.employees,
      searchTerm: "",
    });
  };

  getEmployees = () => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        this.setState({
          employees: response.data.data,
          employeesToDisplay: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    // console.log("HandleSubmit");
    // console.log(this.state.searchTerm);
    //TODO: Filter employees array and return matching employees
    // an onClick might help wiht this

    const employees = [...this.state.employees];
    // const result = words.filter(word => word.length > 6);

    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(this.state.searchTerm, "gi");
      return employee.employee_name.match(regex);
    });

    this.setState({
      employeesToDisplay: filteredEmployees,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search employees by first or last name"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary">
                      Submit{" "}
                    </button>
                  </div>
                </div>
              </form>
              {this.state.employees.length !==
                this.state.employeesToDisplay.length && (
                <button
                  className="btn btn-secondary"
                  onClick={this.clearFilter}
                >
                  Clear Filter{" "}
                </button>
              )}
            </div>
          </div>
        </div>
        <List employees={this.state.employeesToDisplay} />
      </>
    );
  }
}
export default MainPage;