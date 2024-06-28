import styled from "@emotion/styled";

import Text from "../shared/Text";
import { ppe5, variety } from "../../assets";

const Jumbotron = () => {
  return (
    <Container>
      <Inner>
        <TextDiv>
          <Text fontSize="50px">
            We provide a wide range of{" "}
            <span className="text-gradient">Warehousing Services and Food Distribution</span> to ensure all
            our customers are satisfied
          </Text>
        </TextDiv>
        <ImageDiv>
          <img src={variety} />
        </ImageDiv>
      </Inner>
    </Container>
  );
};

export default Jumbotron;

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  color: #fff;
`;

const Inner = styled.div`
  margin: auto;
  width: 77rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
  @media (max-width: 960px) {
    font-size: 14px;
    line-height: 1;
    width: 100%;
    padding-left: 20px;
  }
`;

const ImageDiv = styled.div`
  width: 50%;
`;
