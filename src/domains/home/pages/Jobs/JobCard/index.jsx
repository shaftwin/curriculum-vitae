import PropTypes from 'prop-types';
/* eslint-disable max-len */
import React, { forwardRef } from 'react';
import theme from 'utils/theme';
import { CompanyName, Container, JobDescription, JobTitle } from './styled';

const JobCard = forwardRef(
  (
    { className, color, companyName, jobTitle, jobDescription, onClick },
    ref,
  ) => {
    return (
      <Container
        ref={ref}
        onClick={onClick}
        className={className}
        borderColor={color}
      >
        <div>
          <CompanyName color={color}>{companyName}</CompanyName>
          <JobTitle>{jobTitle}</JobTitle>
          <JobDescription>{jobDescription}</JobDescription>
        </div>
      </Container>
    );
  },
);

JobCard.displayName = 'JobCard';

JobCard.propTypes = {
  /**
   * Required Job title
   */
  jobTitle: PropTypes.string.isRequired,
  /**
   * Required Company name
   */
  companyName: PropTypes.string.isRequired,
  /**
   * Optional Job description
   */
  onClick: PropTypes.func,
  /**
   * Optional Job description
   */
  jobDescription: PropTypes.string,
  /**
   * Optional color for container's border top
   */
  color: PropTypes.string,
  /**
   * Optional custom style
   */
  className: PropTypes.string,
};

JobCard.defaultProps = {
  onClick: () => null,
  jobDescription: null,
  color: theme.colors.red,
  className: null,
};

export default JobCard;
