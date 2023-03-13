import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 24px;
  margin-bottom: 48px;
  justify-content: flex-end;
`

export const InfoContainer = styled.View``

export const StepsContainer = styled.View`
  flex-direction: row;

  margin-top: 24px;
  margin-bottom: 64px;
`

export const Step = styled.View`
  background-color: ${({ theme }) => theme.gray[400]};

  width: 10px;
  height: 10px;

  border-radius: 50%;

  margin: 0 4px;
`

export const CurrentStep = styled.View`
  background-color: ${({ theme }) => theme.gray[50]};

  width: 30px;
  height: 10px;

  border-radius: 50%;
`
