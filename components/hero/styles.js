import styled from 'styled-components';

export const StyledHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
    #desktop-image {
      display: none;
    }
  }
`;

export const StyledLeftText = styled.p`
  width: 375px;
  margin-right: 25px;
  font-size: 24px;
  text-align: left;
  height: 100px;

  @media only screen and (max-width: 800px) {
    margin-top: 20px !important;
    font-size: 20px;
    text-align: center;
    margin-right: 0;
    height: auto;
    width: 100%;
  }
`;

export const StyledRightText = styled.p`
  width: 375px;
  margin-left: 25px;
  font-size: 20px;
  text-align: right;
  height: 100px;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
    text-align: center;
    margin-left: 0;
    height: auto;
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 400px;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }

`;
