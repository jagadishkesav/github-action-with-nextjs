import CustomText from "../components/text";
import styled from "styled-components";

const CustomContainer = styled.div`
  padding: 3rem;
`;

export default function Home(props) {
  return (
    <CustomContainer {...props}>
      <CustomText/>
    </CustomContainer>
  )
}
