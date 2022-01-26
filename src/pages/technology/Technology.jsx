import React from 'react'
import { PageContent } from '../../components'
import { SidebarHeader, TabData, TabDataTeknolojı } from '../../data/pagestabcontent'
import { Tekbaslangic } from '../../data/teknolojicontents'

 const Technology = () => {
    return (
        <>
            <PageContent tabdata={TabDataTeknolojı} sidebarheader={SidebarHeader.technology} contentDataName={Tekbaslangic}/>
        </>
    )
}
export default Technology