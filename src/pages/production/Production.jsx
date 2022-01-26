import React from "react";
import { PageContent } from "../../components";
import { Baslangic, Yuzbakimiintro } from "../../data/pagescontents";
import { TabData , SidebarHeader} from "../../data/pagestabcontent";

const Production = () => {
  return (
    <>
      <PageContent
        tabdata={TabData}
        sidebarheader={SidebarHeader.production}
        contentDataName={Baslangic}
      />
    </>
  );
};
export default Production;
