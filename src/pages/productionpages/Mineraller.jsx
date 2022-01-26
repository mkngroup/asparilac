import React from 'react';
import { PageContent } from '../../components';
import { SayfaMineraller } from '../../data/pagescontents';
import { SidebarHeader, TabData } from '../../data/pagestabcontent';

const Mineraller = () => {
  return (
      <PageContent tabdata={TabData} contentDataName = {SayfaMineraller} sidebarheader={SidebarHeader.production}/>
  );
};

export default Mineraller;
