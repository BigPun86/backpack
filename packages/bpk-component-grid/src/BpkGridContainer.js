import React, { PropTypes } from 'react'

import './bpk-grid.scss'

const BpkGridContainer = (props) => {
  const classNames = [ 'bpk-grid__container' ]

  props.padded ? classNames.push('bpk-grid__container--padded') : null
  props.debug ? classNames.push('bpk-grid__container--debug') : null

  return <div className={classNames.join(' ')}>{props.children}</div>
}

BpkGridContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  padded: PropTypes.bool,
  debug: PropTypes.bool
}

BpkGridContainer.defaultProps = {
  padded: true,
  debug: false
}

export default BpkGridContainer