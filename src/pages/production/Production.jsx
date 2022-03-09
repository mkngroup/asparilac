import React from "react";
import { Helmet } from "react-helmet";
import { PageContent, Pageupicon } from "../../components";
import { Baslangic, Yuzbakimiintro } from "../../data/pagescontents";
import { TabData , SidebarHeader} from "../../data/pagestabcontent";


const Production = () => {
  return (
    <>
    <Helmet>
    <title>Aspar İlaç - Üretim Bölümü</title>
    <meta name="description" content="uretim bolumu"/>
    </Helmet>
      <PageContent
        tabdata={TabData}
        sidebarheader={SidebarHeader.production}
        contentDataName={Baslangic}
      />
    </>
  );
};
export default Production;


