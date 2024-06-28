import styled from "@emotion/styled";

import { ProductProvider } from "../../contexts/ProductContext";
import Categories from "./Categories";
import ProductListings from "./ProductListings";

const Body = () => {
  return (
    <ProductProvider>
      <Container>
        <Inner>
          <Categories />
          <ProductListings />
        </Inner>
      </Container>
    </ProductProvider>
  );
};

export default Body;

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  color: #fff;
`;

const Inner = styled.div`
  margin: auto;
  width: 77rem;
  display: flex;

  gap: 3rem;

  gap: 4rem;
  position: relative;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;
