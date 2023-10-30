import {
  ContentLayout,
  CountUp,
  FadeInEffect,
  Grid,
  Hero,
  Text,
  useTheme,
} from 'components'
import useVisible from 'components/utils/use-visibile'
import { useEffect, useRef, useState } from 'react'

export function FactItem({ amount = 0, title = '' }: { amount?: number; title: string }) {
  const theme = useTheme()
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible(ref)

  useEffect(() => {
    if (isVisible) {
      setIsPlaying(true)
    }
  }, [isVisible])
  return (
    <FadeInEffect translateY="4rem" startOpacity={1} blur={10}>
      <div className="fact" ref={ref}>
        <CountUp start={0} end={amount} easing="linear" isCounting={isPlaying}>
          {({ value }) => (
            <Text margin={0} font={'72px'} style={{ fontWeight: '500' }}>
              {value}%
            </Text>
          )}
        </CountUp>

        <Text margin={0} font={'21px'} style={{ color: theme.palette.accents_4 }}>
          {title}
        </Text>
        <style jsx>{`
          .fact {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    </FadeInEffect>
  )
}

export default function Facts() {
  const theme = useTheme()
  const ref = useRef<HTMLDivElement>(null)

  return (
    <ContentLayout>
      <FadeInEffect translateY="4rem">
        <div className="header" ref={ref}>
          <FadeInEffect translateY="4rem">
            <Hero.Tag hasGradient={true} gradient={theme.palette.gradient_3}>
              EARNINGS
            </Hero.Tag>
          </FadeInEffect>
          <FadeInEffect translateY="4rem">
            <Text
              margin={0}
              marginTop={'12px'}
              h4
              font={'clamp(24px, 3.1vw, 48px)'}
              style={{ fontWeight: '700', lineHeight: '1.2' }}>
              We take pride in empowering creators to earn up 
              to $9,999 per month in subscriptions, whereas 
              platforms like TikTok and Instagram have a monthly
              ceiling of $99. We tax creators the least percentage.
            </Text>
          </FadeInEffect>
        </div>
        <Grid.Container gap={5} justify="center">
        <Grid.Container>
            <Grid xs={24} md={8} justify="center">
        <FactItem title="NFTV" amount={20} />
            </Grid>
        <Grid xs={24} md={8} justify="center">
            <FactItem title="TikTok" amount={50} />
        </Grid>
            <Grid xs={24} md={8} justify="center">
            <FactItem title="Instagram" amount={30} />
         </Grid>
         </Grid.Container>
         </Grid.Container>

        <style jsx>{`
          .header {
            max-width: 860px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 64px;
          }

          .portfolio-list {
            display: flex;
            flex-direction: column;
            gap: 60px;
            width: 100%;
          }
        `}</style>
      </FadeInEffect>
    </ContentLayout>
  )
}
