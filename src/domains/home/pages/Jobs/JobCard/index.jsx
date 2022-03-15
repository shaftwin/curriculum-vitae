/* eslint-disable max-len */
import React from 'react';
import { Container, CompanyName, JobTitle, JobDescription } from './styled';

const JobCard = ({
  className,
  color,
  companyName,
  jobTitle,
  jobDescription,
}) => {
  return (
    <Container className={className} borderColor={color}>
      <div>
        <CompanyName color={color}>{companyName}</CompanyName>
        <JobTitle>{jobTitle}</JobTitle>
        <JobDescription>{jobDescription}</JobDescription>
      </div>
    </Container>
  );
};

JobCard.propTypes = {};

export default JobCard;
