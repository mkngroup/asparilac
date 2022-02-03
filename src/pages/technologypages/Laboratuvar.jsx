import React from "react";
import { PageContent } from "../../components";
import { SidebarHeader, TabDataTeknolojı } from "../../data/pagestabcontent";
import { Tekbaslangic, Teklaboratuvar } from "../../data/teknolojicontents";


const Laboratuvar = () => {
  return (
    <>
      <PageContent
        tabdata={TabDataTeknolojı}
        sidebarheader={SidebarHeader.technology}
        contentDataName={Teklaboratuvar}
      />
    </>
  );
};
export default Laboratuvar;