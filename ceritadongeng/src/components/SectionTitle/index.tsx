import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import { sectionTitleTypes } from './dataSectionTitle';
import { string } from 'prop-types';

const SectionTitle: React.FC<sectionTitleTypes> = ({ title }) => {
  return (
    <div className="title-section">
      <Container>
        <br />
        <h3>{title}</h3>
        <hr />
      </Container>
    </div>
  );
};

SectionTitle.propTypes = {
  title: string
};

export default SectionTitle;
