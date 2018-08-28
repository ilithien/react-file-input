import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './file.css';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
    }

    this.onLoad = this.onLoad.bind(this);
  }

  onLoad({ target }) {
    const { files: [first, ...rest] } = target;

    if (first) {
       const reader = new FileReader();
       reader.onload = (e) => {
           this.setState({
             file: e.target.result
           })
       }
       reader.readAsDataURL(first);
     }
  }

  render() {
    const { id = "react-file-input", label = `Choose a file...` } = this.props;
    return <div className="react-file-input-wrapper">
      <label className="file-label" htmlFor={id} >{label}</label>
      <input type="file" id={id} className="hidden" onChange={this.onLoad} />
      <img src={this.state.file} />
    </div>
  }
}

FileInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};
