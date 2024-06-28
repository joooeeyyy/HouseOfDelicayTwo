import styled from "@emotion/styled";

import Text from "../../components/shared/Text";
import { businesVision, mission, missionStatement, vision } from "../../assets";
import { devices } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const Mission = () => {
  return (
    <Container className="">
      <Inner>
        <TextDiv>
          <Text fontSize="32px">Our Mission</Text>
          <Text lineHeight="2.2">
          At House of delicacy Food Distribution Company, our mission is to nourish communities by ensuring access to high-quality, nutritious food products while fostering sustainable and equitable partnerships across the supply chain. We are committed to:

Quality and Safety: Providing safe, wholesome food products that meet the highest industry standards, ensuring trust and satisfaction among our customers and partners.

Accessibility: Ensuring equitable access to our products by efficiently distributing them to diverse communities, addressing food deserts, and supporting local businesses.

Sustainability: Promoting environmentally responsible practices throughout our operations, from sourcing to delivery, to minimize our ecological footprint and contribute to a healthier planet.

Innovation: Continuously exploring innovative solutions in distribution logistics and product development to meet evolving consumer needs and preferences.

Community Engagement: Actively engaging with communities through philanthropic initiatives, educational programs, and partnerships that promote food security and healthy lifestyles.

Ethical Standards: Upholding the highest ethical standards in all aspects of our business, fostering trust, transparency, and integrity with our stakeholders.

Through these commitments, XYZ Food Distribution Company strives to be a leader in the food distribution industry, making a positive impact on the health and well-being of individuals and communities we serve
          </Text>
        </TextDiv>
        <ImageDiv>
          <img src={missionStatement}/>
        </ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>
          <img src={businesVision} />
        </ImageDiv>
        <TextDiv>
          <Text fontSize="32px">Our Vision</Text>
          <Text lineHeight="2.2">
            House Of Delicacy Mission&apos;s vision To become the leading provider of high-quality, sustainable food distribution solutions, enhancing global accessibility and nutritional diversity."

This vision statement outlines the following key aspects:

Leading Provider: Aiming to be recognized as a leader in the food distribution industry signifies ambition and excellence.

High-Quality: Emphasizing quality ensures a commitment to delivering superior products and services to customers.

Sustainable Solutions: Committing to sustainability highlights responsibility towards environmental and social impacts, ensuring longevity and ethical practices.

Enhancing Global Accessibility: Focusing on accessibility suggests a desire to reach diverse markets and populations, promoting inclusivity and broad impact.

Nutritional Diversity: Prioritizing nutritional diversity signifies a dedication to promoting health and well-being through varied and balanced food options.
          </Text>
        </TextDiv>
      </Inner>
    </Container>
  );
};

export default Mission;

const Container = styled.div`
  padding: 5rem 0rem;
  /* background: #00040e; */
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
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
  display: flex;
  align-items: center;
  gap: 5rem;
  @media ${xs} {
    width: 100%;
    gap: 3rem;
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  }
  @media ${lg} {
    width: 100%;
    padding: 5rem;
    gap: 4rem;
    flex-direction: row;
  }
  @media ${xl} {
    width: 77rem;
    padding: 0rem;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  @media ${xs} {
    width: 100%;
  }
  @media ${lg} {
    width: 50%;
  }
`;

const ImageDiv = styled.div`
  width: 50%;
  @media ${xs} {
    width: 100%;
  }
  @media ${lg} {
    width: 50%;
  }
`;
