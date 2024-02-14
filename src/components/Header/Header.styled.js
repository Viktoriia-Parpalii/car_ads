import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px;
  .logo {
    color: #3470ff;
    font-style: italic;
    font-weight: bold;
  }
  .nav {
    display: flex;
    gap: 25px;
    align-items: center;
    margin-left: auto;
    margin-right: 100px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  border-radius: 12px;
  padding: 14px 14px;
  width: 100px;
  text-align: center;
  margin: 0 auto;
  align-items: center;
  text-decoration: none;
  font-size: 15px;

  color: #fff;
  background: #3470ff;
  &:hover,
  &.active {
    color: black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
