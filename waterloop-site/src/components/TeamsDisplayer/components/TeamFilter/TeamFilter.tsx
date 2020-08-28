import React, { useState } from "react";
import styled from "styled-components";
import FilterImg from "../../../../static/img/assets/filter_active.svg";
import Checkbox from "./Checkbox";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`;

const StyledFilter = styled.button`
  width: 150px;
  height: 35px;
  background-color: #f9d55b;
  border-radius: 25px;
  border: none;
  outline: none;
  text-align: center;
  &:hover {
    color: white;
    background-color: #222535;
  }
  //diasppears when width is more than 975px
  @media (max-width: 975px) {
    display: none;
  }
  // mobile buttons
  &.mobile {
    text-align: left;
    padding-left: 30px;
    border-radius: 50px;
    width: 300px;
    height: 70px;
    //displays when width is less than 975px
    @media (min-width: 975px) {
      display: unset;
    }
  }
  //select team button when mobile toggle is closed
  &.selectTeams {
    width: 375px;
    height: 70px;
    border-radius: 50px;
    color: white;
    background-color: #222535;
    text-align: left;
    padding-left: 30px;
    //displays when width is less than 975px
    @media (max-width: 975px) {
      display: unset;
    }
    //diasppears when width is more than 975px
  }
`;

// //button colours when selected
const SelectedFilter = styled(StyledFilter)`
  color: white;
  background-color: #222535;
`;

//container for buttons in mobile
const SlideDownContainer = styled.div`
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
  border: 1.3px solid #dbdbdb;
  justify-items: space-evenly;
  border-radius: 4px;
  & > div:first-child {
    grid-column: 1 / -1;
  }
  padding: 5px 13px;
`;

const StyledButton = styled.button`
  font-family: "IBM Plex Sans";
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1.3px solid #dbdbdb;
  border-radius: 4px;
  outline: grey;
  background: transparent;
  width: 85px;
  height: 35px;
  margin: 6px 0;
`;
const StyledImage = styled.img`
  margin-bottom: 0.1rem;
`;

const TeamFilter = (props: any) => {
  let slideDownContainer;
  let toggleLine;

  const [toggleOpen, setToggle] = useState(false);

  return (
    <FilterContainer>
      <h2>Team Roster</h2>
      <StyledButton onClick={() => setToggle(!toggleOpen)}>
        <StyledImage src={FilterImg}></StyledImage>
        Filter
      </StyledButton>
      {toggleOpen && (
        <SlideDownContainer>
          <div>
            <p>Subteams</p>
          </div>
          {props.teamFilters.map((filter: boolean, i: number) => {
            return (
              <div>
                <Checkbox
                  checked={filter}
                  key={i}
                  onClick={() => props.updateFilters(i)}
                >
                  {props.filterLabels[i]}
                </Checkbox>
              </div>
            );
          })}
        </SlideDownContainer>
      )}
    </FilterContainer>
  );
};

export default TeamFilter;
