import React from "react";
import { PageContent } from "../../components";
import { SayfaMultiVitaminler, SayfaVitaminler } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const Multivitaminler = () => {
  return (
    <>
      <PageContent tabdata={TabData} contentDataName={SayfaMultiVitaminler} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Multivitaminler;
