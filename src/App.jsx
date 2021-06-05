import React from 'react'
import logo from './logo.svg';
import './App.scss';

import FileUploader from './components/FileUploader.jsx'
import SpikeViewer from './components/SpikeViewer.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      engrams: [],
      cellNames: []
    }

    this.setSpikeData = this.setSpikeData.bind(this)
  }

  setSpikeData(data) {
    this.setState({
      engrams: data.shift(),
      cellNames: data.shift(),
      data: data
    })
  }

  render() {
    return (
      <div className="main pb-5">
        <header className="header">
          <h1 className="header-title">Spike Visualizer</h1>
        </header>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <FileUploader dataSetter={this.setSpikeData} />
              </div>
              <div className="col-12 mt-5 d-flex justify-content-center flex-wrap">
                {this.state.data.length > 0 ? (
                  <SpikeViewer data={this.state.data} engrams={this.state.engrams} cellNames={this.state.cellNames} />
                ) : ''}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
