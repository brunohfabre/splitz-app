import styled, { css } from 'styled-components/native'

const sizes = {
  sm: css`
    width: 32px;
    height: 32px;

    border-radius: 16px;
  `,
  md: css`
    width: 48px;
    height: 48px;

    border-radius: 24px;
  `,
  lg: css`
    width: 160px;
    height: 160px;

    border-radius: 80px;
  `,
}

export type Size = keyof typeof sizes

type ContainerProps = {
  size: Size
}

export const Container = styled.Image<ContainerProps>`
  background-color: #f1f1f1;

  ${({ size }) => sizes[size]}
`
