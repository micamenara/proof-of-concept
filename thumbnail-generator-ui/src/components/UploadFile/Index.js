import React, { useState } from 'react';
import styled, { useTheme, keyframes } from 'styled-components';
import Button from '../Button';
import FileButton from '../FileButton';
import IcloudComputing from '../Icons/IcloudComputing';
import Itrash from '../Icons/Itrash';
import Ilink from '../Icons/link';
import Input from '../Input';

export default function UploadFile({ onFile }) {
  const [isDragging, setIsDragging] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const theme = useTheme();

  const handleFile = (file) => {
    setInputValue('');
    setHasImage(true);
    onFile(file);
  };

  const handleOndragOver = (event) => {
    event.preventDefault();
  };

  const handleOndrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const imageFile = event.dataTransfer.files[0];
    handleFile(imageFile);
  };

  const handleDragEnter = (event) => {
    setIsDragging(true);
  };

  const clear = () => {
    setHasImage(false);
    onFile(null);
  };

  const getImageFromURL = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        handleFile(blob);
      });
  };

  return (
    <UploadSection>
      <TopSection>
        <h2>Files</h2>
        <Actions>
          {hasImage ? (
            <Button onClick={() => clear()} variant='outline'>
              <Itrash fill={theme.colors.primary} width={theme.icons.sm} />
              Clear
            </Button>
          ) : (
            <>
              <FileButton
                accept='image/png, image/jpeg'
                onChange={(e) => handleFile(e.target.files[0])}
              >
                Upload Files
              </FileButton>
              <Button onClick={() => setShowInput(true)} variant='outline'>
                <Ilink fill={theme.colors.primary} width={theme.icons.sm} />
                From URL
              </Button>
            </>
          )}
        </Actions>
      </TopSection>
      {showInput && !hasImage && (
        <FromUrlSection>
          <Input
            type='text'
            placeholder='http://'
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <Button onClick={() => getImageFromURL(inputValue)}>Preview</Button>
        </FromUrlSection>
      )}
      {!hasImage && (
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
      )}
    </UploadSection>
  );
}

const UploadSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  .drop_zone {
    display: flex;
    flex: 1;
    position: absolute;
    width: ${({ theme }) => `calc(100% - (${theme.spacing.md} * 3))`};
    bottom: ${({ theme }) => `calc(${theme.spacing.md} * 2)`};
    height: calc(100% - 150px);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px dashed ${({ theme }) => theme.colors.gray4};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  .drop_zone > p {
    color: ${({ theme }) => theme.colors.gray1};
  }
  .image {
    width: 200px;
    height: 200px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    display: inline-block;
  }
`;

const Actions = styled.div`
  display: flex;
`;

const FromUrlSection = styled.div`
  display: flex;
  align-items: center;
  > input {
    flex: 1;
    margin-right: ${({ theme }) => theme.spacing.sm};
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
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 50%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  animation: ${backgroundColorAnimation} 2s infinite linear;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.md} 0px`};
  > h2 {
    margin: 0;
  }
`;
