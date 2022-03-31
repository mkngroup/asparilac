import React from 'react';
import { PageContent } from '../../components';
import { SayfaKolajen } from '../../data/pagescontents';
import { SidebarHeader, TabData } from '../../data/pagestabcontent';
import {Helmet} from "react-helmet"
const Kolajen = () => {
    return (
      <>
      <Helmet>
      <title>Aspar İlaç - Kolajen</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
        <PageContent tabdata={TabData} contentDataName = {SayfaKolajen} sidebarheader={SidebarHeader.production} />
        </>
    );
  };

export default Kolajen;
