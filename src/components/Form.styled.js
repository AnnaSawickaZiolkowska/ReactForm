import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  
  form {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      width: clamp(300px, 80vw, 600px);
      height: fit-content;
      padding 25px;
      border-radius: 10px;
  }
`;