import { Activity } from 'components/icons'
import FeatherIcon from 'components/icons/feather'
import GitHubIcon from 'components/icons/github'
import PackageIcon from 'components/icons/package'
import {
  Button,
  ContentLayout,
  FadeInEffect,
  Grid,
  Hero,
  Text,
  useTheme,
} from 'components'
import { HomeCell } from '.'
export default function Services() {
  const theme = useTheme()
  return (
    <ContentLayout>
      <FadeInEffect translateY="4rem">
        <div className="header">
          <FadeInEffect translateY="4rem">
            <Hero.Tag hasGradient={true}>$LUV</Hero.Tag>
          </FadeInEffect>
          <FadeInEffect translateY="4rem">
            <Text
              margin={0}
              marginTop={'12px'}
              h4
              font={'clamp(24px, 3.1vw, 48px)'}
              style={{ fontWeight: '700', lineHeight: '1.2' }}>
              $LUV is the new like airdropped to creators and subscribers
            </Text>
          </FadeInEffect>
          <FadeInEffect translateY="4rem">
            <Text
              margin={0}
              marginTop={'24px'}
              p
              font={'clamp(14px, 1.2vw, 16px)'}
              style={{ color: theme.palette.accents_6, fontWeight: 400 }}>
              Creators earned slave wages on other platforms so we built a solution.
              Subscribe and watch creators like you elevate their biz game, play games
              and create solutions that benefit you. 
            </Text>
          </FadeInEffect>
        </div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={6}>
            <FadeInEffect
              width={'100%'}
              height={'100%'}
              translateY="4rem"
              startOpacity={1}
              blur={10}>
              <HomeCell
                icon={<PackageIcon />}
                url="/components"
                title="Donate live"
                desc="Airdrop $LUV or crypto to creators live as a donation to support their channel."
              />
            </FadeInEffect>
          </Grid>
          <Grid xs={24} md={6}>
            <FadeInEffect
              width={'100%'}
              height={'100%'}
              translateY="4rem"
              startOpacity={1}
              blur={10}>
              <HomeCell
                icon={<FeatherIcon />}
                url="/guide/themes"
                title="Tokenized content"
                desc="If a clip from NFTV goes viral we will tokenize it as a LUV NFT, then we auction it."
              />
            </FadeInEffect>
          </Grid>
          <Grid xs={24} md={6}>
            <FadeInEffect
              width={'100%'}
              height={'100%'}
              translateY="4rem"
              startOpacity={1}
              blur={10}>
              <HomeCell
                icon={<GitHubIcon />}
                url="/"
                title="Grants"
                desc="We accept proposals to elevate NFTV, $LUV grants are funded in just 3 business days."
              />
            </FadeInEffect>
          </Grid>
          <Grid xs={24} md={6}>
            <FadeInEffect
              width={'100%'}
              height={'100%'}
              translateY="4rem"
              startOpacity={1}
              blur={10}>
              <HomeCell
                icon={<Activity />}
                url="/"
                title="Pitch"
                desc="Pitch us a live video or audio show, if we love it we will fund it with $LUV."
              />
            </FadeInEffect>
          </Grid>
        </Grid.Container>

        <div className="action-button">
          <FadeInEffect translateY="4rem" width={'auto'} blur={10}>
            <Button type="secondary" auto scale={1.3}>
              Read documentation
            </Button>
          </FadeInEffect>
        </div>

        <style jsx>{`
          .action-button {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 36px 0px;
          }
          .header {
            max-width: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 64px;
          }
        `}</style>
      </FadeInEffect>
    </ContentLayout>
  )
}
