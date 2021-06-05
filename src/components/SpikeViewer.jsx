import React from 'react'
import PropTypes from 'prop-types'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css';

import SpikeBlock from './SpikeBlock.jsx'

export default class SpikeViewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timeIndex: 0
    }

    this.sliderChangeHander = this.sliderChangeHander.bind(this)
    this.slideTooltipHander = this.slideTooltipHander.bind(this)
  }

  sliderChangeHander(value) {
    this.setState({ timeIndex: value })
  }

  slideTooltipHander(props) {
    const { value, dragging, index, ...restProps } = props;

    const time = value / 10.0
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${time} s`}
        visible={dragging}
        placement="bottom"
        key={index}
      >
        <Slider.Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  }

  render() {
    return(
      <div className="row">
        <div className="spike-viewer-wraper mb-3 col-12">
          <div className="spike-viewer-content">
            {this.props.data[this.state.timeIndex].slice(1, -5).map((value, index) => {
              let cellName = this.props.cellNames[index]
              let engram = this.props.engrams[index] !== '#N/A'
              return <SpikeBlock cellName={cellName} value={parseFloat(value)} engram={engram} key={`${cellName}-${index}-${value}`} />
            })}
          </div>
        </div>

        <div className="spike-viewer-slider p-0">
          <Slider onChange={this.sliderChangeHander} min={0} max={this.props.data.length - 1} handle={this.slideTooltipHander} />
        </div>
      </div>
    )
  }
}

SpikeViewer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  engrams: PropTypes.arrayOf(PropTypes.string).isRequired,
  cellNames: PropTypes.arrayOf(PropTypes.string).isRequired
}
