import React from 'react';
import { PageContent } from '../../components';
import { SayfaVitaminler } from '../../data/pagescontents';
import { SidebarHeader, TabData } from '../../data/pagestabcontent';

const Vitaminler = () => {
  return (
      <>
      <PageContent tabdata={TabData} contentDataName = {SayfaVitaminler} sidebarheader={SidebarHeader.production}/>
      </>
  );
};

export default Vitaminler;
