import {styled} from "@mui/material";


const Container = styled("div")`
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  padding: 8px;
  h3 {
    margin: 0;
  }
`;

export const GoalCard = () => {
  return <Container>
    <h3>Title</h3>
  </Container>
}