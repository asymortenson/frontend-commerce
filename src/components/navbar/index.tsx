import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { createMedia } from "@artsy/fresnel";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import Marker from "../marker";
import LogoImg from "../logo";

const NavbarContainer = styled.div`
  ${tw`    
  w-full
  flex
  flex-row
  items-center
  justify-between
  mt-8
`}
`;

// Delivery address

const DeliveryContainer = styled.div`
  ${tw`
  hidden
  mr-3
  lg:flex
  `}
`;

const GeoIcon = styled.img`
  ${tw`
ml-2
mr-1 
w-4
`}
`;

// Search Box

const SearchContainer = styled.div`
  ${tw`
  hidden
  mx-10
  lg:flex
  relative
  `}
`;

const SearchInput = styled.input`
  ${tw`
  py-3
  pl-4
  bg-gray-50 
  placeholder:text-primary
  placeholder:opacity-70
  border-2
  text-primary
  border-white
  focus:outline-none
  focus:border-primaryFocus 
  focus:border-opacity-20
  focus:border-2
  `}
`;

const SearchIcon = styled.img`
  ${tw`
  absolute
  right-5
  top-4
  `}
`;

// Cart

const CartContainer = styled.div`
  ${tw`
  cursor-pointer
  pr-10
  hidden
  2xl:flex
  `}
`;

const TextContainer = styled.div`
  ${tw`
  px-4
  relative
  `}
`;

const CartText = styled.h2`
  ${tw`font-semibold`}
`;

const CartDollars = styled.h3`
  ${tw`text-xs font-semibold text-primaryFocus`}
`;

const Cart = styled.img`
  ${tw`w-7`}
`;

const ChevronDown = styled.img`
  ${tw`
  w-5
  top-5
  -right-2
  absolute`}
`;

// Logo

const UserContainer = styled.div`
  ${tw`
hidden
2xl:flex
items-center
`}
`;

const Avatar = styled.img`
  ${tw`
  w-11
  mr-3
  `}
`;

const AvatarName = styled.h2`
  ${tw`
  font-semibold`}
`;

// Mobile Menu

const ListContainer = styled.ul`
  ${tw`
  list-none
  `}
`;

const NavItem = styled.li`
  ${tw`
    text-white
    leading-3
    text-lg
    font-semibold
    my-2
`}
`;

// Categories

const CategoriesContainer = styled.ul`
  ${tw`
  my-14
  hidden
  lg:flex
  items-center
  lg:flex-row
  lg:items-stretch
`}
`;
const CategoryItem = styled.li`
  ${tw`
  first:lg:ml-0
  first:flex
  first:items-center
  items-center
  flex
  first:mb-3
  first:lg:mb-0
  first:mt-0
  my-3
  last:flex-grow
  last:justify-end
  last:mx-0
  lg:my-0
  font-bold
  mx-12
  `}
`;

const { MediaContextProvider, Media } = createMedia({
  breakpoints: SCREENS,
});

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LogoImg />
        <DeliveryContainer>
          Delivery to <GeoIcon src="./assets/vector/geo.svg" />{" "}
          <span className="font-bold">City, Street 12...</span>
        </DeliveryContainer>
        <SearchContainer>
          <SearchInput size={45} placeholder="What are you looking for?" />
          <SearchIcon src="./assets/vector/search.svg" />
        </SearchContainer>
        <CartContainer>
          <Cart src="./assets/vector/cart.svg" />
          <TextContainer>
            <CartText>My Cart</CartText>
            <CartDollars>$100.50</CartDollars>
            <ChevronDown src="./assets/vector/chevron-down.svg" />
          </TextContainer>
        </CartContainer>
        <UserContainer>
          <Avatar src="./assets/images/avatar.png" />
          <AvatarName>Denis</AvatarName>
        </UserContainer>
        <Media className="block 2xl:hidden" lessThan="2xl">
          <Menu right styles={menuStyles}>
            <ListContainer>
              <NavItem>
                <a href="#">My Profile</a>
              </NavItem>
              <NavItem>
                <a href="#">Delivery Address</a>
              </NavItem>
              <NavItem>
                <a href="#">Search</a>
              </NavItem>
              <NavItem>
                <a href="#">Cart</a>
              </NavItem>
              <div className="w-full h-0.5 my-4 opacity-40 bg-white"></div>
              <NavItem>
                <a href="#">Logout</a>
              </NavItem>
            </ListContainer>
          </Menu>
        </Media>
      </NavbarContainer>

      <CategoriesContainer>
        <CategoryItem>
          <a className="flex relative items-center" href="#">
            <img
              className="mr-2 w-8 hidden lg:block"
              src="./assets/vector/grid.svg"
            />
            All Categories
            <img
              className="absolute w-5 hidden lg:block -right-6 bottom-1.5"
              src="./assets/vector/chevron-down.svg"
            />
          </a>
        </CategoryItem>
        <CategoryItem>
          <a href="#">New Products</a>
        </CategoryItem>
        <CategoryItem>
          <a className="relative" href="#">
            <Marker text="hot" />
            Best Prices
          </a>
        </CategoryItem>
        <CategoryItem>
          <a href="#">Promotions</a>
        </CategoryItem>
        <CategoryItem>
          <a className="relative" href="#">
            <Marker green text="new" />
            Offers
          </a>
        </CategoryItem>
        <CategoryItem>
          <a className="flex items-center" href="#">
            <img className="mr-2" src="./assets/vector/gifts.svg" />
            Gifts
          </a>
        </CategoryItem>
      </CategoriesContainer>
    </>
  );
}
