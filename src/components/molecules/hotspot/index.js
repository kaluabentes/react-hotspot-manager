import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ClickOutside from 'react-click-outside'

import HotspotMarker from 'components/atoms/hotspot-marker'
import Tooltip from 'components/atoms/tooltip'

import styles from './styles.module.css'

const Hotspot = ({ posX, posY, title, content, isOpen, isEditable, onEdit, onToggle, onClose }) => (
  <ClickOutside onClickOutside={onClose}>
    <div
      className={classnames(styles.hotspot, { [styles.isOpen]: isOpen })}
      style={{ top: `${posY}px`, left: `${posX}px` }}
    >
      <HotspotMarker onClick={onToggle} />
      <div className={styles.tooltipContainer}>
        <Tooltip isEditable={isEditable} onEdit={onEdit} title={title} content={content} />
      </div>
    </div>
  </ClickOutside>
)

Hotspot.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Hotspot
