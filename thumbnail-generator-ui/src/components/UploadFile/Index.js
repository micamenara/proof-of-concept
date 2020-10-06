import React, { useState } from 'react';
import styled, { useTheme, keyframes, css } from 'styled-components';
import { imageSettings, Text } from '../../constants';
import validateImage from '../../utils/validateImage';
import Button from '../Button';
import FileButton from '../FileButton';
import IcloudComputing from '../Icons/IcloudComputing';
import Iimage from '../Icons/Iimage';
import Ilink from '../Icons/link';
import Input from '../Input';

export default function UploadFile({ onFile }) {
  const [isDragging, setIsDragging] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);
  const theme = useTheme();

  const handleFile = (file) => {
    const isValid = validateImage(file);
    if (isValid) {
      setInputValue('');
      onFile(file);
      showError && setShowError(false);
    } else {
      setShowError(true);
    }
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

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const getImageFromURL = (url) => {
    return fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        handleFile(blob);
      })
      .catch((err) => console.error(err));
  };

  return (
    <UploadSection>
      <MobileImage>
        <Iimage fill={theme.colors.gray1} height='70px' />
        <p>{Text.uploadFile.uploadImagesHere}</p>
      </MobileImage>
      <Actions>
        <FileButton
          accept={imageSettings.allowedTypes.join(',')}
          onChange={(e) => handleFile(e.target.files[0])}
        >
          {Text.uploadFile.upload}
        </FileButton>
        <StyledButton onClick={() => setShowInput(true)} variant='outline'>
          <Ilink fill={theme.colors.primary} width={theme.icons.sm} />
          {Text.uploadFile.fromUrl}
        </StyledButton>
      </Actions>
      {showInput && (
        <FromUrlSection>
          <Input
            type='text'
            name='image-url'
            placeholder='http://'
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          <Button
            onClick={() => getImageFromURL(inputValue)}
            disabled={!(inputValue && inputValue.length)}
          >
            {Text.uploadFile.getUrlImage}
          </Button>
        </FromUrlSection>
      )}
      {showError && <Error>{Text.uploadFile.errorMessage}</Error>}
      <DragZone onDragEnter={handleDragEnter} onDragOver={handleOndragOver} onDrop={handleOndrop}>
        {isDragging ? (
          <Icon>
            <IcloudComputing fill={theme.colors.primary} height='70px' />
          </Icon>
        ) : (
          <DragImage>
            <Iimage fill={theme.colors.gray1} height='70px' />
            <p>{Text.uploadFile.dragImages}</p>
          </DragImage>
        )}
      </DragZone>
    </UploadSection>
  );
}

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const DragZone = styled.div`
  display: flex;
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px dashed ${({ theme }) => theme.colors.gray4};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      display: none;
    }
  `};
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      flex-direction: column;
      button {
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing.md};
      }
    }
  `};
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

const DragImage = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

const Error = styled.label`
  color: ${({ theme }) => theme.colors.error};
`;

const StyledButton = styled(Button)`
  margin-left: ${({ theme }) => theme.spacing.md};
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      margin: 0px;
    }
  `}
`;

const MobileImage = styled.div`
  display: none;
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `}
  > p {
    color: ${({ theme }) => theme.colors.gray1};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;
