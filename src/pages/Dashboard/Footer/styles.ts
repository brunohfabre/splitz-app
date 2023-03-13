import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;

  left: 0;
  bottom: 0;
  right: 0;

  padding: 24px;
`

export const ButtonsContainer = styled.View`
  background-color: ${({ theme }) => theme.shapePrimary};

  flex-direction: row;

  border-radius: 16px;

  height: 56px;
`
