import React from "react";
import { PageContent } from "../../components";
import { SidebarHeader, TabDataTeknolojı } from "../../data/pagestabcontent";
import { Tekmakinalar } from "../../data/teknolojicontents";


const Makinalar = () => {
  return (
    <>
      <PageContent
        tabdata={TabDataTeknolojı}
        sidebarheader={SidebarHeader.technology}
        contentDataName={Tekmakinalar}
      />
    </>
  );
};
export default Makinalar;
