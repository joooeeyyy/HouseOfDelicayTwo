import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Text from "../../components/shared/Text";
import {
  helmet,
  safetyVest,
  gloves,
  coveralls,
  eyeprotection,
  earprotection,
  safetyBoots,
  respirators,
  flotationjacket,
  TandoriNaan,
  ChickenNuggets,
  LahoriKulcha,
  punjabiSamosa,
  HomeStyleTenders,
  homeStyleAloo,
  CheckerCookies,
  pheni,
  tea,
  teaR,
} from "../../assets";
import { devices, useMuiResponsiveness } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const ProductCategories = () => {
  const navigate = useNavigate();
  const { isLaptop } = useMuiResponsiveness();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };
  const categories = [
    {
      name: "Punjabi Samosa",
      image: <Image src={punjabiSamosa} alt="" />,
    },
    {
      name: "Tandoori Naan",
      image: <Image src={TandoriNaan} alt="" />,
    },
    {
      name: "Chicken Nugget",
      image: <Image src={ChickenNuggets} alt="" />,
    },
    {
      name: "Chicken Tenders",
      image: <Image src={HomeStyleTenders} alt="" />,
    },
    {
      name: "Home Style Aloo Paratha",
      image: <Image src={homeStyleAloo} alt="" />,
    },
    {
      name: "Cookies",
      image: <Image src={CheckerCookies} alt="" />,
    },
    {
      name: "Pheni",
      image: <Image src={pheni} alt="" />,
    },
    {
      name: "Tea",
      image: <Image src={tea} alt="" />,
    },
    {
      name: "Tea Rusk",
      image: <Image src={teaR} alt="" />,
    },
  ];
  return (
    <Container className="">
      <Inner>
        <Text fontSize="32px" align="center">
          {" "}
          Product Categories
        </Text>

        <Grid>
          {categories.map(({ name, image }, index) => (
            <Link to={"/product"} key={"one"} onClick={scrollToTop}>
              <Card key={index}>
                <div onClick={() => navigate("/product")}>{image}</div>
                <Text fontSize={isLaptop ? "25px" : "22px"} align="center">
                  {name}
                </Text>
              </Card>
            </Link>
          ))}
        </Grid>
      </Inner>
    </Container>
  );
};

export default ProductCategories;

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

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 80%;
  padding-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  @media ${xs} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${lg} {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${xl} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  /* color: #13f6ff */
  height: 20rem;
  align-items: center;
  display: flex;
  gap: 1.5rem;
  /* justify-content: space-between; */
  text-align: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media ${xs} {
    height: auto;
  }

  /* @media ${md} {
    height: 30rem;
  } */
  @media ${lg} {
    height: 30rem;
    justify-content: space-between;
    gap: 0;
  }
  @media ${xl} {
    height: 20rem;
  }
`;

const Image = styled.img`
  width: 77%;
  height: auto;
`;
