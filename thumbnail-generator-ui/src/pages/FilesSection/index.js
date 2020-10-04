import React, { useState } from 'react';
import styled, { useTheme, css } from 'styled-components';
import Button from '../../components/Button';
import GenerateThumbnail from '../../components/GenerateThumbnail';
import UploadFile from '../../components/UploadFile';
import Itrash from '../../components/Icons/Itrash';
import { Text } from '../../constants';

export default function FilesSection() {
  const [file, setFile] = useState(null);
  const theme = useTheme();
  const handleFile = (fileData) => {
    setFile(fileData);
  };
  return (
    <Section>
      <Files>
        <TopSection>
          <h2>{Text.fileSection.title}</h2>
          {file && (
            <Button onClick={() => handleFile(null)} variant='primary'>
              <Itrash fill={theme.colors.white} width={theme.icons.sm} />
              {Text.uploadFile.clear}
            </Button>
          )}
        </TopSection>
        {file ? (
          <GenerateThumbnail file={file} onReturn={() => setFile(null)} />
        ) : (
          <UploadFile onFile={(fileData) => handleFile(fileData)} />
        )}
      </Files>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Files = styled.div`
  background: ${({ theme }) => theme.colors.gray3};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      background: transparent;
    }
  `};
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.md};
  > h2 {
    padding: ${({ theme }) => theme.spacing.md};
    margin: 0px;
    text-align: center;
  }
`;
