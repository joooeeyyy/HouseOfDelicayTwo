import { useContext } from "react";
import styled from "@emotion/styled";

import ProductCard from "./ProductCard";
import {
  boot1,
  boot2,
  boot3,
  eyeprotection,
  goggles,
  goggles2,
  helmet,
  helmet2,
  helmet3,
  flotationjacket,
  vest2,
  vest3,
  earprotection,
  headphones,
  headphones2,
  gloves,
  gloves2,
  gloves3,
  chinese,
  punjabiSamosa,
  CheckerCookies,
  pheni,
  TandoriNaan,
  thai,
  korean,
  ChickenNuggets,
  foodItems,
  LahoriKulcha,
  japanese,
  asianReceipe,
} from "../../assets";
import { ProductContext } from "../../contexts/ProductContext";

const ProductListings = () => {
  const { currentCategoryIndex } = useContext(ProductContext);
  const ChineseFood = [
    {
      image: chinese,
      name: "Chiness Food",
      description: "Chicken Nuggets food items...",
    },
    {
      image: punjabiSamosa,
      name: "Punjabi samosa",
      description: "Chicken Nuggets food items...",
    },
    {
      image: CheckerCookies,
      name: "Checkered Cookies",
      description: "Chicken Nuggets food items...",
    },
  ];

  const ThaiFood = [
    {
      image: thai,
      name: "Thai Food",
      description: "Chicken Nuggets food items...",
    },
    {
      image: pheni,
      name: "Pheni",
      description: "Chicken Nuggets food items...",
    },
    {
      image: TandoriNaan,
      name: "Tandori Naan",
      description: "Chicken Nuggets food items...",
    },
  ];

  const KoreanFood = [
    {
      image: korean,
      name: "Korean Food",
      description:
       "Chicken Nuggets food items...",
    },
    {
      image: pheni,
      name: "Pheni",
      description:
       "Chicken Nuggets food items...",
    },
    {
      image: TandoriNaan,
      name: "TandoriNaan",
      description:
        "Chicken Nuggets food items...",
    },
  ];

  const Japanesefood = [
    {
      image: asianReceipe,
      name: "Asain Receipe",
      description:
       "Chicken Nuggets food items...",
    },
    {
      image: chinese,
      name: "Chinese Food",
      description:
        "Chicken Nuggets food items...",
    },
    {
      image: ChickenNuggets,
      name: "Chicken Nugget",
      description:
        "Chicken Nuggets food items...",
    },
  ];
  const BreadProducts = [
    {
      image: ChickenNuggets,
      name: "Bread",
      description: "Chicken Nuggets food items...",
    },
    {
      image: japanese,
      name: "Food",
      description: "japanese food items...",
    },
    {
      image: LahoriKulcha,
      name: "Lahori Kulcha",
      description: "Lahori Kulcha food items...",
    },
  ];
  const AllNuggests = [
    {
      image: ChickenNuggets,
      name: "Chicken Nuggets",
      description: "Chicken Nuggets food items...",
    },
    {
      image: punjabiSamosa,
      name: "Punjabi Samosa",
      description:
        "Punjabi Samosa food items...",
    },
    {
      image: foodItems,
      name: "Food Items",
      description:
        "Food Items For Distribution...",
    },
  ];

  const products = [
    ChineseFood,
    ThaiFood,
    KoreanFood,
    Japanesefood,
    BreadProducts,
    AllNuggests,
  ][currentCategoryIndex];

  return (
    <Container>
      <Div>
        {products.map(({ name, image, description }, index) => (
          <ProductCard
            key={index}
            image={image}
            name={name}
            description={description}
          />
        ))}
      </Div>
    </Container>
  );
};

export default ProductListings;

const Container = styled.div`
  width: 70%;
  min-height: 30rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; /* Single column by default */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns on large screens */
  }
`;
