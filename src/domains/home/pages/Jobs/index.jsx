/* eslint-disable max-len */
import { useTheme } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ColumnContainer,
  Container,
  CustomJobCard,
  Grid,
  JobModal,
  JobModalContainer,
} from './styled';

const Jobs = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [displayModal, setDisplayModal] = useState(undefined);
  const [modalColor, setModalColor] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current.contains(e.target)) {
        setDisplayModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <Container>
      <Grid>
        <ColumnContainer>
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.pink);
            }}
            color={theme.colors.pink}
            companyName={t('common:tekyn.name')}
            jobTitle={t('common:lead.dev')}
            jobDescription={t('common:tekyn.resume')}
          />
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.purple);
            }}
            color={theme.colors.purple}
            companyName={t('common:tracktl.name')}
            jobTitle={t('common:frontend.dev')}
            jobDescription={t('common:tracktl.resume')}
          />
        </ColumnContainer>
        <ColumnContainer>
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.blue);
            }}
            color={theme.colors.blue}
            companyName={t('common:sparted.name')}
            jobTitle={t('common:fullstack.dev')}
            jobDescription={t('common:sparted.resume')}
          />
          <CustomJobCard
            displayModal={displayModal}
            onClick={() => {
              setDisplayModal(true);
              setModalColor(theme.colors.electricBlue);
            }}
            color={theme.colors.electricBlue}
            companyName={t('common:freelancer')}
            jobTitle={t('common:fullstack.dev')}
            jobDescription={t('common:freelancer.resume')}
          />
        </ColumnContainer>
      </Grid>
      <JobModalContainer ref={ref} displayModal={displayModal}>
        <JobModal
          color={modalColor}
          displayModal={displayModal}
          companyName="Freelancer"
          jobTitle="FullStack Developer"
          jobDescription="Lots of work done"
        />
      </JobModalContainer>
    </Container>
  );
};

Jobs.propTypes = {};

export default Jobs;
