import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Text from "../../components/shared/Text";
import { ppe4, tech2 , foodItems, foodItems2 } from "../../assets";
import { devices } from "../../utils/responsive";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

const { xs, md, lg, xl } = devices;

const ProductService = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };
  return (
    <Container className="">
      <Inner>
        <TextDiv>
          <Text fontSize="32px"> Our Products</Text>
          <Text lineHeight="2.2">
           Discover our delectable range of handcrafted food products, meticulously prepared to tantalize your taste buds. From savory snacks to indulgent desserts, each item promises freshness, quality ingredients, and irresistible flavors. Perfect for any occasion, our food products are a testament to culinary excellence and passion for delicious dining experiences.
          </Text>
          <div>
            <Link to={"/product"} key={"one"} onClick={scrollToTop}>
              <div onClick={() => navigate("/product")}>
                <Button size="large">Learn more</Button>
              </div>
            </Link>
          </div>
        </TextDiv>
        <ImageDiv>
          <img src={foodItems} />
        </ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>
          <img src={foodItems2}/>
        </ImageDiv>
        <TextDiv>
          <Text fontSize="32px">Our Other Services</Text>
          <Text lineHeight="2.2">
          Explore our diverse selection of premium food products, crafted with care to deliver exceptional taste and quality. From gourmet snacks to wholesome meals and artisanal treats, each item embodies our commitment to culinary excellence and the finest ingredients. Elevate your dining experience with our flavorful offerings, designed to satisfy every palate and occasion.
          </Text>
          <div>
            <Link key={"two"} to={"/services"} onClick={scrollToTop}>
              <div onClick={() => navigate("/services")}>
                <Button size="large">Learn more</Button>
              </div>
            </Link>
          </div>
        </TextDiv>
      </Inner>
    </Container>
  );
};

export default ProductService;

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
