import React, { Component } from "react";

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: [],
    results: [],
  };

  // On file select
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files });
  };

  //method to upload file
  onFileUpload = () => {
    // Create an object of formData
    const images = new FormData();

    // Update the formData object
    for (let i = 0; i < this.state.selectedFile.length; i++) {
      images.append(`images`, this.state.selectedFile[i]);
    }

    // Details of the uploaded file
    console.log(this.state.selectedFile);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    // POST request using fetch()
    try {
      fetch("http://localhost:5000/Images", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: images,
        config,
        credentials: "include",
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((jdata) => {
          this.setState({ results: jdata.result });
          console.log(this.state.results);
        });
      this.setState({ show: true });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome Select images for API</h2>
        <h3>File Upload !</h3>
        <div>
          <input type="file" onChange={this.onFileChange} multiple="multiple" />
          <button onClick={this.onFileUpload}>upload</button>
        </div>
        {this.state.results.map((item) => (
          // decoding the base64 encoded image
          <img src={`data:image/jpg;base64,${item.image}`} />
        ))}
      </div>
    );
  }
}

export default App;
