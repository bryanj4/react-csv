import React from 'react';
import {buildURI} from '../core';
import {
   defaultProps as commonDefaultProps,
   propTypes as commonPropTypes} from '../metaProps';
const defaultProps = {
  target: '_blank'
};

/**
 *
 * @example ../../sample-site/csvdownload.example.md
 */
class CSVDownload extends React.Component {
  // static propTypes = commonPropTypes;

  constructor(props) {
    super(props);
    this.state={};
  }

  buildURI() {
    return buildURI(...arguments);
  }

  componentDidMount(){
    const {data, headers, separator, target, specs, replace} = this.props;
    this.state.page = window.open(
        this.buildURI(data, headers, separator), target, specs, replace
    );
  }

  getWindow() {
    return this.state.page;
  }

  render(){
    return (null)
  }
}

CSVDownload.propTypes = commonPropTypes;
CSVDownload.defaultProps = Object.assign(
  commonDefaultProps,
  defaultProps
);
export default CSVDownload;
