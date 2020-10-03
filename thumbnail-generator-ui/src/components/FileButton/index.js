import React, { useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import Button from '../Button';
import Iupload from '../Icons/Iupload';

export default function FileButton({
  disabled = false,
  accept = '',
  multiple = false,
  variant = 'primary',
  children,
  ...props
}) {
  const inputRef = useRef(null);
  const theme = useTheme();

  return (
    <FileInput>
      <input
        id='file-upload'
        type='file'
        disabled={disabled}
        accept={accept}
        multiple={multiple}
        ref={inputRef}
        {...props}
      />
      <Button
        onClick={() => inputRef.current.click()}
        htmlFor='file-upload'
        role='button'
        variant={variant}
        disabled={disabled}
      >
        <Iupload fill={theme.colors.white} width={theme.icons.sm} />
        {children}
      </Button>
    </FileInput>
  );
}

const FileInput = styled.div`
  display: flex;
  flex-direction: row;
  #file-upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;
