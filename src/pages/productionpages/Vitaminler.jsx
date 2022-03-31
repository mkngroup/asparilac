import React from 'react';
import { PageContent } from '../../components';
import { SayfaVitaminler } from '../../data/pagescontents';
import { SidebarHeader, TabData } from '../../data/pagestabcontent';
import {Helmet} from "react-helmet"
const Vitaminler = () => {
  return (
      <>
      <Helmet>
      <title>Aspar İlaç - Vitaminler</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent tabdata={TabData} contentDataName = {SayfaVitaminler} sidebarheader={SidebarHeader.production}/>
      </>
  );
};

export default Vitaminler;
