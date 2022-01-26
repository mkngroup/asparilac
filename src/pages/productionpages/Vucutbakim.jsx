import React from "react";
import { PageContent } from "../../components";
import { SayfaVucutbakim, Yuzbakimiintro } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const Vucutbakim = () => {
  return (
    <>
      <PageContent tabdata={TabData} contentDataName={SayfaVucutbakim} sidebarheader={SidebarHeader.production}/>
    </>
  );
};

export default Vucutbakim;
