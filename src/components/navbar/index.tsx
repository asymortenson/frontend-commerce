import styled from "styled-components";
import tw from "twin.macro";

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

// Logo

const LogoContainer = styled.div`
  ${tw`
  flex
  items-center
  `}
`;

const GroceryHeading = styled.h1`
  ${tw`
  w-5/12
  text-xl
  text-primary
  leading-5
  font-bold
  pl-5
  `}
`;

const ShopHeading = styled.span`
  ${tw`
    text-primaryFocus
    text-4xl
  `}
`;

const Logo = styled.img`
  ${tw`
  w-20
  `}
`;

// Delivery address

const DeliveryContainer = styled.div`
  ${tw`
  flex
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
  flex
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

// Favorite

const FavoriteIcon = styled.img`
  ${tw`
  w-7
  cursor-pointer
  `}
`;

// Cart

const CartContainer = styled.div`
  ${tw`
  flex
  cursor-pointer
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
flex
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

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src="./assets/images/logo.png" />
        <GroceryHeading>
          Grocery <ShopHeading>Shop</ShopHeading>
        </GroceryHeading>
      </LogoContainer>
      <DeliveryContainer>
        Delivery to <GeoIcon src="./assets/vector/geo.svg" />{" "}
        <span className="font-bold">City, Street 12...</span>
      </DeliveryContainer>
      <SearchContainer>
        <SearchInput size={60} placeholder="What are you looking for?" />
        <SearchIcon src="./assets/vector/search.svg" />
      </SearchContainer>
      <FavoriteIcon src="./assets/vector/favorite.svg" />
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
    </NavbarContainer>
  );
}
