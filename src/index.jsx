import React, { Component } from 'react';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
    }

    this.onLoad = this.onLoad.bind(this);
  }

  onLoad({ target }) {
    const { files } = target;
    if (files && files[0]) {
       const reader = new FileReader();

       reader.onload = () => {
           this.setState({
             file: target.result
           })
       }
       reader.readAsDataURL(files[0]);
     }
   }
  }

  render() {
    return <div>
      <input type="file" onChange={this.onLoad} />
      <img src="#" />
    </div>
  }
}
