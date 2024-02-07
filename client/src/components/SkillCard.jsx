import styled from "styled-components";

export default function SkillCard({ name, icon, handleChangeSkill, border }) {
  return <Container border={border} onClick={() => handleChangeSkill(name)}>{icon}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: solid lightgray 1px;
  padding: 20px;
  border-radius: 10px;
  font-size: 130px;
  width: 130px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: ${props => (props.border ? props.border : "none")} solid 1px;
`;
