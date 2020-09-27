import React, { useState } from 'react';
import styled, { useTheme, keyframes } from 'styled-components';
import Button from '../Button';
import IcloudComputing from '../Icons/IcloudComputing';
import Iupload from '../Icons/Iupload';

export default function UploadFile() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDragging, setIsDragging] = useState('');
  const theme = useTheme();

  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleOndragOver = (event) => {
    event.preventDefault();
  };

  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    let imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };

  const handleDragEnter = (event) => {
    setIsDragging(true);
  };

  return (
    <UploadSection>
      <TopSection>
        <h2>Files</h2>
        <Button>
          <UploadIcon fill={theme.colors.white} width='16px' />
          Upload Files
        </Button>
      </TopSection>
      {previewUrl && (
        <div className='image'>
          <img src={previewUrl} alt='some alt' />
          <span>{image.name}</span>
        </div>
      )}
      <div
        className='drop_zone'
        onDragEnter={handleDragEnter}
        onDragOver={handleOndragOver}
        onDrop={handleOndrop}
      >
        {isDragging ? (
          <Icon>
            <IcloudComputing fill={theme.colors.primary} height='70px' />
          </Icon>
        ) : (
          <p>Drag and drop image here....</p>
        )}
      </div>
    </UploadSection>
  );
}

const UploadSection = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .drop_zone {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px dashed #ccc;
    border-radius: 45px;
  }
  .drop_zone > p {
    color: ${({ theme }) => theme.colors.gray1};
  }
  .image {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    display: inline-block;
  }
`;
/* Animation */
const backgroundColorAnimation = keyframes`
  0% {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Icon = styled.div`
  padding: 20px;
  border-radius: 50%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  animation: ${backgroundColorAnimation} 2s infinite linear;
`;

const UploadIcon = styled(Iupload)`
  margin-right: 8px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
  > h2 {
    margin: 0;
  }
`;
