import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme, css } from 'styled-components';
import Button from '../Button';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Ichecked from '../Icons/Ichecked';
import Ihappy from '../Icons/Ihappy';
import Ireturn from '../Icons/Ireturn';
import Isad from '../Icons/Isad';
import Note from '../Note';
import { Text, ImageSizes } from '../../constants';
import getResizedImage from '../../api/getResizedImage';
import Idownload from '../Icons/Idownload';

export default function GenerateThumbnail({ file, onReturn }) {
  const [fileUrl, setFileUrl] = useState(null);
  const [cropper, setCropper] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [croppedFile, setCroppedFile] = useState('');
  const cropperRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      getResizedImage(img, 800, 600)
        .then((data) => setFileUrl(data))
        .catch(() => {
          setHasError(true);
        });
    } else {
      setFileUrl(null);
      setCroppedFile(null);
    }
  }, [file]);

  const handleImage = (width, height) => {
    const img = new Image();
    const downloadLink = document.createElement('a');

    downloadLink.setAttribute('download', 'thumbnail.png');
    img.src = croppedFile;

    getResizedImage(img, width, height).then((data) => {
      downloadLink.setAttribute('href', data);
      downloadLink.click();
    });
  };

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropp = imageElement?.cropper;
    setCropper(cropp);
  };

  const cropImage = () => {
    setCroppedFile(cropper.getCroppedCanvas().toDataURL());
  };

  return file && !hasError ? (
    <Section>
      {croppedFile && (
        <>
          <Images>
            {ImageSizes.map((item, idx) => (
              <ImageData key={idx}>
                <img alt={`thumbnail-${item.label}`} src={croppedFile} width={item.width} height={item.height} />
                <p>{item.label}</p>
                <Button onClick={() => handleImage(item.width, item.height)} type='button'>
                  <Idownload fill={theme.colors.white} width={theme.icons.sm} />
                  {Text.generateThumbnail.download} {item.label}
                </Button>
              </ImageData>
            ))}
          </Images>
          <Note>
            <NoteContent>
              <Ihappy fill={theme.colors.success} width={theme.icons.lg} />
              <div className='note-content'>
                <h4>Images successfully generated!</h4>
                <div className='note-content__subtitle'>
                  <p>
                    Thank you for using Thumbnail, to continue editing a new image click here.
                  </p>
                  <Button onClick={() => onReturn()} variant='outlineSecondary'>
                    New image
                  </Button>
                </div>
              </div>
            </NoteContent>
          </Note>
        </>
      )}
      {fileUrl && !croppedFile && (
        <>
          <Cropper
            src={fileUrl}
            style={{ height: 'calc(100% - 60px)', width: '100%' }}
            aspectRatio={16 / 14}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
          />
          <Actions>
            <Button variant='outline' onClick={() => onReturn()}>
              <Ireturn fill={theme.colors.primary} width={theme.icons.sm} />
              {Text.generateThumbnail.return}
            </Button>
            <Button onClick={() => cropImage()} type='button'>
              <Ichecked fill={theme.colors.white} width={theme.icons.sm} />
              {Text.generateThumbnail.done}
            </Button>
          </Actions>
        </>
      )}
    </Section>
  ) : hasError ? (
    <Section>
      <Note variant='error'>
        <NoteContent>
          <Isad fill={theme.colors.error} width={theme.icons.lg} height={theme.icons.lg} />
          <div className='note-content'>
            <h4 style={{ color: theme.colors.error }}>Ups! Something went srong</h4>
            <div className='note-content__subtitle'>
              <p>There was a problem with your file.</p>
              <Button onClick={() => onReturn()} variant='outlineSecondary'>
                New image
              </Button>
            </div>
          </div>
        </NoteContent>
      </Note>
    </Section>
  ) : null;
}

const Section = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const Actions = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
`;

const ImageData = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
  > img {
    max-width: 100%;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NoteContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  svg {
    margin-right: ${({ theme }) => theme.spacing.md};
  }

  .note-content {
    flex: 1;
  }

  .note-content > h4 {
    margin: ${({ theme }) => theme.spacing.sm} 0px;
    color: ${({ theme }) => theme.colors.success};
  }

  .note-content__subtitle {
    display: flex;
    align-items: center;
  }
  .note-content__subtitle > button {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoint.md}) {
      flex-direction: column;
      .note-content__subtitle {
        flex-direction: column;
      }
      .note-content__subtitle > button {
        margin-left: 0px;
      }
    }
  `};
`;
