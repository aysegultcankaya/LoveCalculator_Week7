import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      fname: null,
      sname: null,
      sonuc: 0,
    };
  }
  hesapla = async () => {
    const options = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: { fname: this.state.fname, sname: this.state.sname },
      headers: {
        "X-RapidAPI-Key": "682450f205msh52ccb8633be7f60p1476c0jsn4fdf80f65fef",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({ sonuc: response.data.percentage });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="items">
          <label>İSİM: </label>
          <input
            className="col-md-4 "
            onChange={(e) => this.handleChange(e, "fname")}
            type="text"
            c
          ></input>
        </div>
        <div className="items">
          <label>İSİM: </label>
          <input
            className="col-md-4 "
            onChange={(e) => this.handleChange(e, "sname")}
            type="text"
          ></input>
        </div>

        <button type={"button"} onClick={() => this.hesapla()}>
          Hesapla
        </button>
        <div>
          <span>%{this.state.sonuc}</span>
        </div>
      </div>
    );
  }
}

export default App;
