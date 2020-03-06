import React from "react"
import styled from "styled-components"

const TextBlock = styled.div`
  text-align: justify;
  width: 50%;
  height: 100%;
  padding-right: 3%;
  display: inline-block;
  @media (max-width: 500px){
    display: inline;
    padding-right: 0;
  }
`;

const Img = styled.img`
  width: 30vw;
  height: 23vw;
  border-radius: 20pt;
  margin-top: 3%;
  @media (max-width: 500px){
    display: none;
  }
`;

const ResponsiveImg = styled.img`
  display none;
  @media (max-width: 500px){
    display: inline-block;
    width: 40vw;
    height: 30vw;
    border-radius: 20pt;
    margin-top: 3%;
  }
`;

const LearnMoreBtn = styled.a`
  display: flex;
  justify-content: center;
  background-color: white;
  padding-left: 0.5%;
  padding-right: 0.5%;
  color: #A9A9A9;
  border-radius: 50pt;
  border: 2px solid #A9A9A9;
  height: 1%;
  width: 20%;
  text-decoration: none;
  font-size: 1.5vw;
  @media (max-width: 500px){
    margin-left: 35%;
    margin-right: 30%;
    width: 30%;
    font-size: 2vw;
  }
`;

const Header = styled.h2`
  font-style: italic;
  font-size: 1.7vw;
  @media (max-width: 500px){
    margin-left: 25%;
    margin-right: 25%;
    text-align: center;
    font-size: 2.3vw;
  }
`;

const Text = styled.p`
  font-size: 1.5vw;
  @media (max-width: 500px){
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    font-size: 2vw;
  }
`;

type MyProps = {title: string, text: string, image: string, link: string};

class TextWithImage extends React.Component <MyProps> {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <ResponsiveImg src = {this.props.image} alt = "photo"></ResponsiveImg>
        <TextBlock>
          <Header>{this.props.title}</Header>
          <Text>{this.props.text}</Text>
          <LearnMoreBtn target="_blank" href={this.props.link}>
            <Text>Learn More</Text>
          </LearnMoreBtn>
        </TextBlock>
        <Img src = {this.props.image} alt = "photo"></Img>
      </div>
    );
  }
}

export default TextWithImage