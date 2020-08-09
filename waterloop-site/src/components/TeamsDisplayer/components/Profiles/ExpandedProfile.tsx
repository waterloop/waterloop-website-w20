import React from "react";
import styled from "styled-components";

import { ContactsType } from '../interfaces'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 975px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`
const PortraitContainer = styled.div`
  width: 44%;

  @media (max-width: 975px) {
    width: 100%;
    margin-bottom: 40px;
  }
`
const Portrait = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50% 50%;
  border: 4px solid #fbc531;
  box-sizing: border-box;
`
const InfoContainer = styled.div`
  display: block;
  flex-basis: 53%;
  font-family: IBM Plex Sans;
  font-style: normal;
  color: #000000;

  @media (max-width: 975px) {
    flex-basis: 100%;
  }
`
const InfoTitle = styled.div`
  flex-basis: 100%;
  font-weight: bold;
  font-size: 33px;
  margin-bottom: 30px;
`
const RoleSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 100%;

  & > div {
    font-weight: 500px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`
const InfoPosition = styled.div`
  flex-basis: 50%;
  margin-bottom: 30px;
`
const InfoTeams = styled.div`
  flex-basis: 100%;
`
const InfoBlurb = styled.div`
  flex-basis: 100%;
  font-size: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
`
const ContactListContainer = styled.div`
  display: flex;
  align-content: flex-end;
  flex-direction: columns;

  @media (min-width: 975px) {
    position: absolute;
    bottom: 0;
  }
`
const Contact = styled.a`
  padding-right: 10px;
  height: 30px;
  width: 30px;
`
const Icon = styled.img`
  max-height: 100%;
  max-width: 100%;
`

// List of icons for contact purposes
const ContactList = (props: ContactsType) => {
  return <ContactListContainer>
    {props.contacts.map((item, i) => {
      return <Contact key={i} href={item.url} target="_blank" onClick={(event: any) => {event.stopPropagation()}}>
        <Icon src={item.icon} alt="link"/>
      </Contact>
    })}
  </ContactListContainer>
}

const ExpandedProfile = (props: any) => {
  return (
    <Container onClick={props.onClick}>
        <PortraitContainer><Portrait src={props.portrait} alt="portrait"/></PortraitContainer>
        <InfoContainer>
          <InfoTitle>{props.name}</InfoTitle>
          <RoleSummaryContainer>
            <InfoPosition>{props.position}</InfoPosition>
            <InfoPosition>{props.programInfo}</InfoPosition>
            <InfoTeams>{`Teams: ${props.teams.join(", ")}`}</InfoTeams>
          </RoleSummaryContainer>
          <InfoBlurb>{props.bio}</InfoBlurb>
          {props.contacts.length > 0 && <ContactList contacts={props.contacts}/>}
        </InfoContainer>
    </Container>
  );
}

export default ExpandedProfile;
