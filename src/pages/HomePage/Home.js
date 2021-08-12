import React from 'react';
import { homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Pricing } from '../../components';
import {Paper} from "@material-ui/core";
import './home.css';

function Home() {
  return (
    <>
      {/*<InfoSection {...homeObjOne} />*/}
        <Paper>
            <img src={require('../../images/banniere.jpg')} alt="banner" />
        </Paper>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      {/*<InfoSection {...homeObjFour} />*/}
    </>
  );
}

export default Home;
