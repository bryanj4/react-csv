import React, { PropTypes } from 'react';


export const propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  headers: PropTypes.array,
  target: PropTypes.string,
  separator: PropTypes.string,
  filename: PropTypes.string
};

export const defaultProps = {
  separator: ',',
  filename: 'generatedBy_react-csv.csv'
};

export const PropsNotForwarded = [
  `data`,
  `headers`
];

// export const DownloadPropTypes = Object.assign(
//   {},
//   PropTypes,
//   {
//     : ,
//   }
// );
