import CustomText from "../components/text";
import Layout from "../components/layout";
import styled from "styled-components";

const CustomContainer = styled.div`
  padding: 3rem;
  color: black
`;

export default function Home(props) {
  return (
    <Layout>
      <CustomContainer {...props}>
        <CustomText/>
      </CustomContainer>
    </Layout>
  )
}
