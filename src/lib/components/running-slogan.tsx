import { FadeInEffect, RunningText, StrokeWord, Text } from 'components'

export default function RunningSlogan() {
  return (
    <FadeInEffect blur={10} transition={1000}>
      <RunningText>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          <StrokeWord stroke={1.5}>Vibe</StrokeWord>
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          Tap
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          In
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          <StrokeWord stroke={1.5}>Network</StrokeWord>
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          With
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          <StrokeWord stroke={1.5}>Like</StrokeWord>
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          <StrokeWord stroke={1.5}>Hearts</StrokeWord>
        </Text>
        <Text margin={0} style={{ fontWeight: 800 }} font={'9vw'}>
          Tribe
        </Text>
      </RunningText>
    </FadeInEffect>
  )
}
