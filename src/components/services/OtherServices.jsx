import styled from "@emotion/styled";
import { useContext } from "react";
import Text from "../../components/shared/Text";
import { erp, server, analytics } from "../../assets";
import { devices } from "../../utils/responsive";
import { ServiceContext } from "../../contexts/ServicesContext";

const { xs, md, lg, xl } = devices;

const OtherServices = () => {
  const { isICT, setIsICT } = useContext(ServiceContext);

  return (
    <Container className="">
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px">How warehouse services can improve your eCommerce business</Text>
            <Text lineHeight="2.2">
            Getting warehouse services from a 3PL can help take your eCommerce business to the next level. You gain an experienced warehouse staff without hiring a single worker. Warehouse locations can reduce delivery times. And you might be surprised how affordable the pricing is for quality fulfillment services, especially once you factor in savings from reduced errors and returns. 
              <br />
              <br />
              Businesses can use warehousing services to control inventory. For example, a company can utilize warehouse cycle counts to analyze delivery of goods to consumers. Armed with this information, the same company could take steps to improve its cycle count. Inventory control also makes it easy for companies to eliminate and reduce receiving errors. A good example of a receiving error is any product that employees receive and fail to label. If another employee is sent to retrieve the same product, he/she may pick a different one.
            </Text>
          </TextDiv>
        )}

        <ImageDiv>{isICT && <img src={erp} />}</ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>{isICT && <img src={analytics} />}</ImageDiv>

        {isICT && (
          <TextDiv>
            <Text fontSize="32px">Contract Warehousing</Text>
            <Text lineHeight="2.2">
            Contract warehousing is a service given to companies desiring to establish distribution centers in certain regions. This means a business can set up a warehouse facility overnight and start delivering goods to consumers within a few days. This service can span several months or years. It is popular with startups and businesses experiencing fast growth. Such companies may lack the financial resources to set up their own warehouses. In addition, building a warehouse from the ground up takes time. In today’s competitive business environment, businesses must reach their consumers as fast as possible before competitors infiltrate the same niche.
            </Text>
          </TextDiv>
        )}
      </Inner>
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px">Cross docking </Text>
            <Text lineHeight="2.2">
              <span className="text-gradient">House OF DELICACY</span>{" "}
              In simple terms, cross docking allows clients to route products from one or multiple manufacturing sites to a strategically located distribution center. In most cases, these centers are located near end consumers. When goods arrive from manufacturing centers, they are deconsolidated (broken down) into multiple shipments and then delivered to consumers. This service makes financial sense to manufacturers who do not have the physical space, equipment, and labor required to undertake special order fulfillment. This is in addition to manufacturers who require unloading and merging of bulk shipments.
            </Text>
          </TextDiv>
        )}
        <ImageDiv>{isICT && <img src={server} />}</ImageDiv>
      </Inner>
    </Container>
  );
};

export default OtherServices;

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
