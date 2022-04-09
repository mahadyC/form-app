import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenum: 0,
      role: "",
      msg: ""
    },
    data: []
  };

  componentDidMount(){
    axios.get("http://localhost:3001/notes")
    .then(res => {this.setState({data: res.data})});
  }

  inputHandler = (e) => {
    this.setState({
      inputData: {
        ...this.state.inputData, [e.target.name]: e.target.value}
    });
  }

  submitHandler = (e) => {
    
  }

  render(){
    console.log(this.state.data);
    return (
      <div>
        <div className="formAndView">
        <div className="formContainer">
          <form onSubmit={this.submitHandler}>
            <div>
              <label htmlFor="firstname">Firstname:</label>
              <input type="text" id="firstname" name="firstname" onChange={this.inputHandler} required/>
            </div>
            <div>
              <label htmlFor="lastname">Lastname:</label>
              <input type="text" id="lastname" name="lastname" onChange={this.inputHandler} required/>
            </div>
            <div>
              <label htmlFor="phonenum">Phone:</label>
              <input type="text" id="phonenum" name="phonenum" onChange={this.inputHandler} required/>
            </div> 
            <div>
              <label htmlFor="role">Role:</label>
              <select id="role" name="role" onChange={this.inputHandler} required>
                <option value="">--Choose a role--</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="teacher">Learner</option>
              </select>
            </div> 
            <div>
              <label htmlFor="msg">Message:</label>
              <textarea id="msg" name="msg" defaultValue="" onChange={this.inputHandler} required>
              </textarea>
            </div>
            <button>SEND</button>
          </form>
        </div>
        <div className="view">
          <p>firstname: {this.state.inputData.firstname}</p>
          <p>lastname: {this.state.inputData.lastname}</p>
          <p>phonenum: {this.state.inputData.phonenum}</p>
          <p>role: {this.state.inputData.role}</p>
          <p>msg: {this.state.inputData.msg}</p>
        </div>  
        </div>
        
          {this.state.data.map(obj => {
            return(
              <Notes {...obj} key={obj.id} />
            );
          })}
      </div>
    );
  }
}

const Notes = ({firstname, lastname, phonenum, role, msg}) => {
  return(
    <div className="notes">
      <div className="note">
      {firstname} {lastname} - {role} | {phonenum} |
      <strong>{msg}</strong>
      </div>
    </div>

  );
}

export default App;
