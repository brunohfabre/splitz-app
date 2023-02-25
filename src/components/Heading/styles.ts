import styled, { css } from 'styled-components/native'

const sizes = {
  xs: css`
    font-size: 12px;
    line-height: 16px;
  `,
  sm: css`
    font-size: 14px;
    line-height: 20px;
  `,
  md: css`
    font-size: 16px;
    line-height: 24px;
  `,
  lg: css`
    font-size: 18px;
    line-height: 28px;
  `,
  xl: css`
    font-size: 20px;
    line-height: 28px;
  `,
  '2xl': css`
    font-size: 24px;
    line-height: 32px;
  `,
  '3xl': css`
    font-size: 30px;
    line-height: 36px;
  `,
  '4xl': css`
    font-size: 36px;
    line-height: 40px;
  `,
  '5xl': css`
    font-size: 48px;
    line-height: 48px;
  `,
  '6xl': css`
    font-size: 60px;
    line-height: 60px;
  `,
  '7xl': css`
    font-size: 72px;
    line-height: 72px;
  `,
  '8xl': css`
    font-size: 96px;
    line-height: 96px;
  `,
  '9xl': css`
    font-size: 128px;
    line-height: 128px;
  `,
}

const colors = {
  title: css`
    color: ${({ theme }) => theme.textTitle};
  `,
  base: css`
    color: ${({ theme }) => theme.textBase};
  `,
  support: css`
    color: ${({ theme }) => theme.textSupport};
  `,
}

export type Size = keyof typeof sizes
export type Color = keyof typeof colors

type ContainerProps = {
  size: Size
  color: Color
}

export const Container = styled.Text<ContainerProps>`
  font-family: 'Inter_600SemiBold';

  ${({ size }) => sizes[size]};
  ${({ color }) => colors[color ?? 'title']};
`
