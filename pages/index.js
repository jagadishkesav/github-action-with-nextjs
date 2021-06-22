import CustomText from "../components/text";
import styled from "styled-components";

const CustomContainer = styled.div`
  padding: 3rem;
  background: pink
`;

export default function Home(props) {
  return (
    <CustomContainer {...props}>
      <CustomText/>
    </CustomContainer>
  )
}
