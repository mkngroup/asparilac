import React from "react";
import { PageContainer, ContentWrapper, Maincontent } from "./pagecontentcs";

import {
  PageSidebar,
  PageHeaderSec,
  Pagecontentintro,
  Pagecontentdescrip,
  Pagealerts,
  Fasonuretim,
} from "../../components";

import {
  Yuzbakimiheader,
  Yuzbakimiintro,
  Alertformulasyon_blue,
} from "../../data/pagescontents";

import { TabData } from "../../data/pagestabcontent";

const PageContent = (props) => {
  const data = props.contentDataName;
  const tabdata = props.tabdata;
  const sidebarheader = props.sidebarheader;
  return (
    <>
      <PageContainer>
        <PageSidebar tabdata = {tabdata} sidebarheader={sidebarheader}/>
        <ContentWrapper>
          <PageHeaderSec
            headerimg={data.headerimage}
            headertext={data.headertext}
            bckcolor={data.headerbckcolor}
            txtcolor={data.txtcolor}
            headeralttext={data.headeralttext}
          />
          <Maincontent>

            

            <Pagecontentintro
              parag1={data.parag1}
              parag1_span={data.parag1_span}
              parag1_2={data.parag1_2}
              parag2={data.parag2}
              parag3={data.parag3}
              secondparagbr={data.secondparagbr}
              parag3_class={data.parag3_class}
              parag3_span={data.parag3_span}
              parag4={data.parag4}
              parag4_class={data.parag4_class}
              parag4_span={data.parag4_span}
              shortmenu_class={data.shortmenu_class}
              shortmenu_header={data.shortmenuheader}
              shortchil={data.shortmenulinksitems}
              table1_class={data.table1_class}
              table1_headertext = {data.table1_headertext}
              table1_items={data.table1_items}
            />
            <Pagealerts
              alertclassname={data.alertyellow}
              alert_header={data.alertyellowheader}
              short_alert={data.alertyellowcontents}
              
            />

            <Pagecontentdescrip shortcontent={data.contents} />
            <Fasonuretim />

            <Pagealerts
              alertclassname={data.alert_classblue}
              alert_header={data.alert_header}
              short_alert={data.alert_itemcontents}
            />
          </Maincontent>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default PageContent;
