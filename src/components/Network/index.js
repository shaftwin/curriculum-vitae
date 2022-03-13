import PropTypes from 'prop-types';
import React from 'react';
import { Link } from './styled';

const Network = ({ className, icon, link, download }) => {
  return (
    <Link className={className} href={link} target="_blank" download={download}>
      {icon}
    </Link>
  );
};

Network.propTypes = {
  /**
   * Required icon component
   */
  icon: PropTypes.element.isRequired,
  /**
   * Required link
   */
  link: PropTypes.string.isRequired,
  /**
   * Optional link
   */
  download: PropTypes.bool.isRequired,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

Network.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default Network;
