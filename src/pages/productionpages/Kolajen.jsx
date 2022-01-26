import React from 'react';
import { PageContent } from '../../components';
import { SayfaKolajen } from '../../data/pagescontents';
import { SidebarHeader, TabData } from '../../data/pagestabcontent';

const Kolajen = () => {
    return (
        <PageContent tabdata={TabData} contentDataName = {SayfaKolajen} sidebarheader={SidebarHeader.production} />
    );
  };

export default Kolajen;
