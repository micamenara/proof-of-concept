import React from 'react';
import styled from 'styled-components';
import UploadFile from '../UploadFile/Index';

export default function FilesSection() {
  return (
    <Section>
      <div className='files'>
        <UploadFile />
      </div>
    </Section>
  );
}

const Section = styled.div`
  padding: 12px;
  width: 100%;
  height: 100%;
  > .files {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gray3};
    border-radius: 45px;
  }
`;
