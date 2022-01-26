import React from "react";

import { PageContent } from "../../components";
import { Yuzbakimiintro } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const Yuzbakimi = () => {
  return (
    <>
      <PageContent
        tabdata={TabData}
        contentDataName={Yuzbakimiintro}
        sidebarheader={SidebarHeader.production}
      />
    </>
  );
};

export default Yuzbakimi;
