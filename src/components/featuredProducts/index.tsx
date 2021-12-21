import styled from "styled-components";
import tw from "twin.macro";

const ProductsContainer = styled.div`
  ${tw`
  flex`}
`;

export default function FeaturedProducts() {
  return <ProductsContainer>Featured Products</ProductsContainer>;
}
