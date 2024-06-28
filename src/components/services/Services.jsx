import styled from "@emotion/styled";
import { FiCheckCircle } from "react-icons/fi";
import { useContext } from "react";
import Text from "../../components/shared/Text";
import { systems, security, integrations } from "../../assets";
import { devices } from "../../utils/responsive";
import { ServiceContext } from "../../contexts/ServicesContext";
const { xs, md, lg, xl } = devices;

const Services = () => {
  const { isICT, setIsICT } = useContext(ServiceContext);
  return (
    <Container className="">
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px" marginBottom=".5rem">
              Food Distribution Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Warehouse Services 
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Food Distribution Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Food Storage
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Inventory Management services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Food Transportation Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Pick and packing services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Tool Selection
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" />Order Processing
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Order Fullfillment
            </Text>
            {/* <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Auditing and QA
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Q&M Planning and Support
            </Text> */}
          </TextDiv>
        )}
        <ImageDiv>{isICT && <img src={integrations} />}</ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>{isICT && <img src={security} />}</ImageDiv>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px">OTHER SERVICES WE OFFER</Text>
            <Text lineHeight="2.2">
              House Of Delicacy systems distribution skills complement our practice from business process analysis through
              implementation,  and deployment.
              <br />
              <br />
              Our specialities are in the areas of:
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Shipping
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Trans-Loading
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Returns Manangement
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Custom Packing
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Reverse Logistics
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Ambient Storage
            </Text>
          </TextDiv>
        )}
      </Inner>
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px" marginBottom=".5rem">
            The Importance of 3PL Warehouse Services in Today's Business Landscape
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Cost Savings
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Enhanced Customer Satisfaction
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Flexibility and Scalability

            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Keeping Items Safe
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Reorganizing
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Shipping Inbound and Outbound
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Crating
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Cluster Management,
              Hardenings
            </Text>
            
          </TextDiv>
        )}

        <ImageDiv>{isICT && <img src={systems} />}</ImageDiv>
      </Inner>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  padding: 5rem 0rem;
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
    padding: 3rem 0rem;
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
