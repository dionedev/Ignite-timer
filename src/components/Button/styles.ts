import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 10px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme['green-500']};
`
