import React from 'react'
import PropTypes from 'prop-types'
import parse from 'csv-parse/lib/sync'

export default class FileUploader extends React.Component {
  constructor(props) {
      super(props)

      this.csv = ""
      this.onChangeCsvReader = this.onChangeCsvReader.bind(this)
  }

  onChangeCsvReader(event) {
    let file = event.target.files[0]

    let reader = new FileReader()
    reader.onload = (load_event) => {
      this.csv = load_event.target.result
    }
    reader.onloadend = (loadend_event) => {
      this.props.dataSetter(parse(this.csv))
    }
    reader.readAsText(file)
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="formFile" className="form-label">スパイクデータ選択</label>
        <input className="form-control" type="file" id="formFile" onChange={this.onChangeCsvReader} />
      </React.Fragment>
    )
  }
}

FileUploader.defaultProps = {
  dataSetter: () => { /* 何もしない */ }
}

FileUploader.propTypes = {
  dataSetter: PropTypes.func
}
