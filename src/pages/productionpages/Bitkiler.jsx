import React from "react";
import { PageContent, Pageupicon } from "../../components";
import { SayfaBitkiler, SayfaMineraller } from "../../data/pagescontents";
import { SidebarHeader, TabData } from "../../data/pagestabcontent";

const Bitkiler = () => {
  return (
    <>
      <PageContent
        tabdata={TabData}
        contentDataName={SayfaBitkiler}
        sidebarheader={SidebarHeader.production}
      />
    </>
  );
};

export default Bitkiler;
