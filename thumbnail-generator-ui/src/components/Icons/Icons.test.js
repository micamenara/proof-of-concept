import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/Theme';
import Ichecked from './Ichecked';
import Icloud from './Icloud';
import Idownload from './Idownload';
import Ihappy from './Ihappy';
import Iimage from './Iimage';
import Imenu from './Imenu';
import Ireturn from './Ireturn';
import Isad from './Isad';
import Isettings from './Isettings';
import Itrash from './Itrash';
import Iupload from './Iupload';
import Ilink from './link';
import IcloudComputing from './IcloudComputing';
import Icancel from './Icancel';

describe('Icons component', () => {
  test('renders Icons', () => {
    const props = {
      width: '16px',
      height: '16px',
      fill: '#fffff',
    };
    render(
      <ThemeProvider theme={Theme}>
        <Ichecked {...props} />
        <Icloud {...props} />
        <IcloudComputing {...props} />
        <Idownload {...props} />
        <Ihappy {...props} />
        <Iimage {...props} />
        <Imenu {...props} />
        <Ireturn {...props} />
        <Isad {...props} />
        <Isettings {...props} />
        <Itrash {...props} />
        <Iupload {...props} />
        <Ilink {...props} />
        <Icancel {...props} />
      </ThemeProvider>,
    );
  });
});
