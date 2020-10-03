import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import resizeImg from '../../Utils/resizeImage';
import Button from '../Button';

export default function GenerateThumbnail({ file }) {
  const [fileUrl, setFileUrl] = useState('');
  useEffect(() => {
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        const base64String = resizeImg(img, 300, 300, 0);
        setFileUrl(base64String);
      };
    }
  }, [file]);

  const handleImage = () => {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'thumbnail.png');
    downloadLink.setAttribute('href', fileUrl);
    downloadLink.click();
  };
  return file ? (
    <Section>
      <img alt='thumbnail' src={fileUrl}/>
      <p>200x200</p>
      <Button onClick={() => handleImage()} type='button'>
        Download
      </Button>
    </Section>
  ) : null;
}

const Section = styled.div`
  padding: 12px;
`;
