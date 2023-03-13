import { useMemo, useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

import { Heading } from '@components/Heading'
import { CaretRight } from '@components/icons'

import { Button, Container } from './styles'

const {
  Value,
  event,
  set,
  block,
  cond,
  lessThan,
  greaterThan,
  add,
  eq,
  useCode,
  call,
} = Animated

const MAX_WIDTH = Dimensions.get('window').width - 104

type SwipeButtonProps = {
  onSwipe: () => void
}

export function SwipeButton({ onSwipe }: SwipeButtonProps) {
  const [runningEvent, setRunningEvent] = useState(false)

  const transX = useRef(new Value(0)).current
  const offsetX = useRef(new Value(0)).current

  useCode(
    () => [
      call([transX], ([value]) => {
        console.log({ value, MAX_WIDTH, State })
        if (value === MAX_WIDTH && !runningEvent) {
          setRunningEvent(true)

          onSwipe()
        }
      }),
    ],
    [transX, runningEvent],
  )

  const onGestureHandle = useMemo(
    () =>
      event([
        {
          nativeEvent: ({ translationX: x, state }) =>
            block([
              cond(lessThan(add(offsetX, x), 0), set(transX, 0), [
                cond(
                  greaterThan(add(offsetX, x), MAX_WIDTH),
                  set(transX, MAX_WIDTH),
                  set(transX, add(offsetX, x)),
                ),
              ]),
              cond(eq(state, State.END), [
                cond(
                  lessThan(transX, MAX_WIDTH * 0.9),
                  block([set(transX, 0), set(offsetX, 0)]),
                  block([set(transX, MAX_WIDTH), set(offsetX, MAX_WIDTH)]),
                ),
              ]),
            ]),
        },
      ]),
    [transX, offsetX],
  )

  return (
    <Container>
      <Heading>Swipe button</Heading>

      <PanGestureHandler
        onGestureEvent={onGestureHandle}
        onHandlerStateChange={onGestureHandle}
      >
        <Button
          style={{
            transform: [
              {
                translateX: transX,
              },
            ],
          }}
        >
          <CaretRight />
        </Button>
      </PanGestureHandler>
    </Container>
  )
}
