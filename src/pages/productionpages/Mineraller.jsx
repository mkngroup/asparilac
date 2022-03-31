import React from 'react';
import { PageContent } from '../../components';
import { SayfaMineraller } from '../../data/pagescontents';
import { SidebarHeader, TabData } from '../../data/pagestabcontent';
import {Helmet} from "react-helmet"
const Mineraller = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Mineraller</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
    <PageContent tabdata={TabData} contentDataName = {SayfaMineraller} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Mineraller;
