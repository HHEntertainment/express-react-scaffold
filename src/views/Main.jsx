import * as React from 'react';
import { MainWrapper } from './styled';

import GNB from './GNB/container';
import Footer from './Footer/container';
import Board from './Board/container';
import Landing from './Landing/container';

export const Main = () => (
  <MainWrapper>
    <GNB />
    {/* isSignedIn */ true ? <Board /> : <Landing />}
    <Footer />
  </MainWrapper>
);
