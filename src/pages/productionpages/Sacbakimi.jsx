import React from "react";
import { PageContent } from "../../components";
import { SayfaSacbakim, Yuzbakimiintro } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const Sacbakimi = () => {
  return (
    <>
      <PageContent tabdata={TabData} contentDataName={SayfaSacbakim} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Sacbakimi;
