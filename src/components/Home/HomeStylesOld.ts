import styled from "styled-components";

export const ContainerSC = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 24px;
`

export const TitleSC = styled.div`
  font-weight: 700;
  font-size: 48px;
`
export const SubTitleSC = styled.div`
  font-weight: 400;
  font-size: 24px;
`
export const LoadButtonSC = styled.button`
  color: #000;
  background-image: linear-gradient(#E4E4E4, #F7F7F7);

  border-radius: 5px;
  border: 1px solid #000;
  padding: 6px 12px;
  opacity: 0.7;
`
export const LoadJSONSC = styled.input`
  display: none;
`
export const InvalidFileSC = styled.span`
  color: #f00;
  font-weight: 400;
  font-size: 16px;
`
