import React from 'react'
import PositionPosting from "../components/recruitment_form_component/PositionPosting";
import Form from "../components/recruitment_form_component/Form";

const samplePostingsData = [
    {
      role : "Goose Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: "JavaScript, Goose Handling, Creativity",
      technicalQ : "How would you design a nest?",
      termList: ["F19", "W20", "S20", "F20", "W21"]
    },
    {
      role: "Goose Destroyer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: "JavaScript, Goose Handling, Resilience",
      technicalQ: "What is the most deadly feature of a goose?",
      termList: ["F19", "W20", "S20", "F20", "W21"],
    },
    {
      role: "Goose Whisperer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: "JavaScript, Goose Handling, Patience",
      technicalQ: "Demonstrate a time you translated geese language",
      termList: ["F19", "W20", "S20", "F20", "W21"]
    },
    {
      role: "Goose Babysitter",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: "JavaScript, Goose Handling, Kindness",
      technicalQ: "How would you care for the geese in Waterloo?",
      termList: ["F19", "W20", "S20", "F20", "W21"]
    }
]

class Recruitment extends React.Component<any,any> {
  render() {
    return (
      <>
        { samplePostingsData.length > 0 && samplePostingsData.map((item: any) => {
          return <PositionPosting
            role = {item.role}
            description = {item.description}
            skills = {item.skills}
            technicalQ = {item.technicalQ}
            termList = {item.termList}
          ></PositionPosting>
        })}
      </>
    )
  }
}

export default Recruitment;
