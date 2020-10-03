import React, { useState } from 'react';
import styled from 'styled-components';
import GenerateThumbnail from '../GenerateThumbnail';
import UploadFile from '../UploadFile/Index';

export default function FilesSection() {
  const [file, setFile] = useState(null);
  const [hasFile, setHasFile] = useState(false);
  const handleFile = (fileData) => {
    setFile(fileData);
    setHasFile(true);
  };
  return (
    <Section>
      <Files>
        <UploadFile onFile={(fileData) => handleFile(fileData)} />
        {hasFile && <GenerateThumbnail file={file} />}
      </Files>
    </Section>
  );
}

const Section = styled.div`
  padding: 12px;
  width: 100%;
  height: 100%;
`;
const Files = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
