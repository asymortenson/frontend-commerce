import styled from "styled-components";
import tw from "twin.macro";

const HeroContainer = styled.div`
  ${tw`
  flex
  `}
`;

export default function Hero() {
  return <HeroContainer>Hero</HeroContainer>;
}
