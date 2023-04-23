import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 2rem;
`;

export const CardBody = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;