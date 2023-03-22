import styled from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

export const MenuList = styled.div`
  display: flex;
  background-color: black;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const MenuItem = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 1;
  text-transform: uppercase;
  font-family: neue-haas-unica, sans-serif;
  color: white;
  cursor: pointer;
  &:hover {
    color: #A0141C;
  }
`;
