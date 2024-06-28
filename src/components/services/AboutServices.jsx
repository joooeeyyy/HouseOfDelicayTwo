import styled from "@emotion/styled";
import { useContext } from "react";
import Text from "../../components/shared/Text";
import { devices } from "../../utils/responsive";
import { ServiceContext } from "../../contexts/ServicesContext";

const { xs, md, lg, xl } = devices;

const AboutServices = () => {
  const { isICT, setIsICT } = useContext(ServiceContext);

  return (
    <Container className="">
      <Inner>
        {isICT && (
          <Text fontSize="32px" marginBottom="-1.5rem">
            About Our Services
          </Text>
        )}
        <TextDiv>
          {isICT && (
            <Text lineHeight="2.2">
              We provide a broad range of food distribution Services including delivery,
              management and deployment relevant to your food needs to
              reduce your costs and increase your competitiveness in
              today&apos;s global economy. Our strategic Partnerships with top
              niche food providers allow us to leverage your business through
              high quality services and solutions.
            </Text>
          )}
        </TextDiv>
        <Grid></Grid>
      </Inner>
    </Container>
  );
};

export default AboutServices;

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  color: #fff;
  @media ${xs} {
    padding: 2rem 1rem;
  }
  @media ${md} {
    padding: 3rem;
  }
  @media ${lg} {
    padding: 5rem 0;
  }
`;

const Inner = styled.div`
  margin: auto;
  width: 77rem;
  box-sizing: border-box;
  padding: 3rem 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${xs} {
    width: 100%;
    gap: 3rem;
    flex-direction: column;
  }
  @media ${lg} {
    width: 100%;
    padding: 5rem;
    gap: 4rem;
  }
  @media ${xl} {
    width: 77rem;
    padding: 3rem 0rem;
  }
`;

const TextDiv = styled.div`
  text-align: center;
  width: 70%;
  @media ${xs} {
    width: 100%;
  }

  @media ${lg} {
    width: 70%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 70%;
  padding-top: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  @media ${xs} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${lg} {
    width: 70%;
    grid-template-columns: repeat(4, 1fr);
  }
`;
