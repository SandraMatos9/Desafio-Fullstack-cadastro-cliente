import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: var(--radius-default);

  width: 100%;

  position: relative;
  padding-bottom: 20px;

  @media (min-width: 500px) {
    gap: 32px;
  }

  > span {
    position: absolute;
    bottom: -20px;
    font-weight: 500;
    color: var(--grey-80);
    user-select: none;
  }

  > span:hover {
    cursor: pointer;
    color: var(--grey-20);
  }
`;

export const TitleForm = styled.h1`
  font-size: var(--title-1);
  font-weight: var(--Bold);
  padding-bottom: 12px;
`;

export const InputField = styled.div`
  padding: 18px 18px;

  border-radius: var(--radius-default);

  background-color: var(--grey-100);

  width: 70%;
  max-width: 410px;

  display: flex;
  justify-content: flex-start;
  gap: 12px;

  font-size: var(--text-1);
  font-weight: var(--Medium);
  user-select: none;
  overflow: hidden;

  max-height: 64px;

  /* p {
        color: var(--negative-feedback);
    } */

  @media (min-width: 500px) {
    padding: 22px 18px;
    width: 60%;
    max-height: 20px;
  }
`;
export const ErrorStyled = styled.p`
  display: flex;
  align-items: center;
  color: var(--negative-feedback);
`;
export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-right: 8px;

  @media (min-width: 500px) {
    max-width: 150px;
    font-size: var(--inputText);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  max-width: 200px;

  font-size: var(--inputText);

  border: none;

  outline: none;

  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset;
  }

  &:focus {
    outline: 0;
  }

  @media (min-width: 500px) {
    max-width: 200px;
    & ::placeholder {
      position: absolute;
      bottom: 0;
      font-size: var(--inputText);
      font-weight: var(--Regular);
    }
  }
`;
