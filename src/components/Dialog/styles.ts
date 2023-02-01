import styled from 'styled-components/native'

export const Overlay = styled.View`
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);

  justify-content: center;

  z-index: 10;

  padding: 0 24px;
`

export const Container = styled.View`
  background-color: #ffffff;
  padding: 18px;
`

export const Content = styled.View`
  padding: 6px;
`

export const ActionsContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
`
