import React from "react";
import Hero from "components/Hero/General";
import SponsorList from "components/Sponsor/SponsorPage";
import { TextWithImage } from "components/TextWithImage";
import { MyProps } from "components/TextWithImage";
import Text from "static/copy/Sponsors/Sponsors.json";
import SponsorsImg from "../static/img/team/sponsors.png";
import "../theme/styles.scss";

const castData: MyProps[] = Text;
const imgData: string[] = [SponsorsImg];

class Sponsors extends React.Component {
  render() {
    return (
      <div>
        <Hero
          title="Support Our Team"
          description="Help fund the future."
          anchor="#sponsor-list"
        ></Hero>
        <div id={"#sponsor-list"}></div>
        <div className="pageContainer">
          <TextWithImage
            data={castData}
            textPos={"alternate"}
            imgData={imgData}
          ></TextWithImage>

          <div className="break"></div>
          <SponsorList></SponsorList>
        </div>
      </div>
    );
  }
}

export default Sponsors;
