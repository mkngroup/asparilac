import React from 'react'
import { Container } from './pageheaderseccs'

const PageHeaderSec = (props) => {
    return (
        <Container style={{backgroundColor: props.bckcolor}}>
            <img src={props.headerimg} alt={props.headerimgalt} />
            <h1 style={{color: props.txtcolor}}>{props.headertext} <p style={{color: props.txtcolor}}>{props.headeralttext}</p></h1>
        </Container>
    )
}

export default PageHeaderSec
