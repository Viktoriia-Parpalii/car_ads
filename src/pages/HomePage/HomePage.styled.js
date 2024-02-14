import styled from "styled-components";

export const StyledHomePage = styled.div`
  h1 {
    font-size: 50px;
    text-align: center;
    margin-top: 15px;
    color: #3470ff;
  }

  .wrapper {
    margin-top: 25px;
    padding: 20px;
    display: flex;
    border-radius: 20px;
    gap: 70px;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .description {
    font-size: 20px;
    margin-top: 75px;
    color: #fff;
    width: 400px;
    height: 250px;
    padding: 20px 25px;
    background-color: #3470ff;
    border-radius: 20px 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  h2 {
    font-size: 20px;
    text-align: center;
    color: #3470ff;
  }
  .services {
  }
  .services-title {
    font-size: 20px;
    margin-top: 15px;
    color: #3470ff;
  }
`;
