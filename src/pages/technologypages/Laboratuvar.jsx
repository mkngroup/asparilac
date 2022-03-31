import React from "react";
import { PageContent } from "../../components";
import { SidebarHeader, TabDataTeknolojı } from "../../data/pagestabcontent";
import { Tekbaslangic, Teklaboratuvar } from "../../data/teknolojicontents";
import {Helmet} from "react-helmet"

const Laboratuvar = () => {
  return (
    <>
    <Helmet>
      <title>Aspar İlaç - Laboratuvar ve Ar-Ge Merkezi</title>
      <meta name="description" content="Aspar İlaç - Ar-Ge Merkezi Formülasyon ve Metot Geliştirme yöntemleriyle analitik geliştirme yeteneği ve altyapısına sahiptir"/>
    </Helmet>
      <PageContent
        tabdata={TabDataTeknolojı}
        sidebarheader={SidebarHeader.technology}
        contentDataName={Teklaboratuvar}
      />
    </>
  );
};
export default Laboratuvar;