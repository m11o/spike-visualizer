import React from 'react'
import PropTypes from 'prop-types'

export default class SpikeBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  isSpiked() {
    return this.props.value && this.props.value > 1.0
  }

  render() {
    return (
      <div className={`${this.props.engram ? 'is-engram' : ''} ${this.isSpiked() ? 'is-spiked' : ''} spike-block`}  data-bs-toggle="tooltip" data-bs-placement="top" title={this.props.cellName} />
    )
  }
}

SpikeBlock.defaultTypes = {
  cellName: 'unknown'
}

SpikeBlock.propTypes = {
  cellName: PropTypes.string,
  value: PropTypes.number.isRequired,
  engram: PropTypes.bool.isRequired,
}
