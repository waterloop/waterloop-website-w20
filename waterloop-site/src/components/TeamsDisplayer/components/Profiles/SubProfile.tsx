import React from "react";
import styled from "styled-components";

import { ContactsType } from '../interfaces'

const Container = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  width: 320px;
  height: 178px;

  @media (max-width: 975px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 265px;
  }
`
const PortraitContainer = styled.div`
  flex-basis: 60%;
  height: 100%;
`
const Portrait = styled.img`
  flex-basis: 100%;
  height: 100%;
  width: auto;
  border-radius: 50% 50%;
  border: 4px solid #fbc531;
  box-sizing: border-box;
`
const InfoContainer = styled.div`
  flex-basis: 35%;
  display: grid;
  grid-row-template: repeat(3, 1fr);
  align-content: space-between;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;
`
const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;

  @media (max-width: 975px) {
    font-size: 24px;
    line-height: 31px;
  }
`
const InfoPosition = styled.div`
  font-weight: 200;
  font-size: 14px;

  @media (max-width: 975px) {
    font-weight: 200;
    font-size: 20px;
  }
`
const ContactsContainer = styled.div`
  display: flex;
`
const Contact = styled.a`
  padding-right: 5px;
  height: 22px;
  width: 22px;

  @media (max-width: 975px) {
    padding-right: 10px;
    height: 30px;
    width: 30px;
  }
`
const Icon = styled.img`
  max-height: 100%;
  max-width: 100%;
`

// List of icons for contact purposes
const ContactList = (props: ContactsType) => {
  return <>
    {props.contacts.map((item, i) => {
      return <Contact key={i} href={item.url} target="_blank" onClick={(event: any) => {event.stopPropagation()}}>
        <Icon src={item.icon} alt="link"/>
      </Contact>
    })}
  </>
}

const LeadProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
        <PortraitContainer><Portrait src={props.portrait} alt="portrait"/></PortraitContainer>
        <InfoContainer>
          <InfoTitle>{props.name}</InfoTitle>
          <InfoPosition>{props.position}</InfoPosition>
          <ContactsContainer>
            {props.contacts.length > 0 && <ContactList contacts={props.contacts}/>}
          </ContactsContainer>
        </InfoContainer>
    </Container>
  );
}

export default LeadProfile;
