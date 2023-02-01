import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  padding: 24px;
`

type TitleContainerProps = {
  showBackButton: boolean
}

export const TitleContainer = styled.View<TitleContainerProps>`
  flex: 1;

  margin-right: ${({ showBackButton }) => (showBackButton ? 48 : 0)}px;

  align-items: center;
  justify-content: center;
`
