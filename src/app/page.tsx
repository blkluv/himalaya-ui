'use client'

import { HeartIcon } from '@heroicons/react/solid';
import {
  Button,
  ContentLayout,
  Divider,
  FadeInEffect,
  Footer,
  FooterBottom,
  FooterNavigation,
  GradientWord,
  Grid,
  Hero,
  Link,
  PageLayout,
  Section,
  Text,
  useTheme,
} from 'components'
import ThemeProvider from 'components/use-context/theme-provider'
import { capitalize } from 'components/utils/collections'
import {
  Background,
  Facts,
  Partners,
  Portfolio,
  RunningSlogan,
  Services,
} from 'lib/components'
import metaData from '../lib/data/metadata.json'
import { BrandLogo } from 'lib/components/icons'

export default function Index() {
  const theme = useTheme()
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <Hero>
            <Grid.Container gap={0} justify="center">
              <Grid lg={22} justify="center">
                <Hero.Tag>NFTV</Hero.Tag>
              </Grid>
              <Grid lg={22} justify="center">
                 <Hero.Title>
                 Subscribe To <GradientWord>Live</GradientWord> PPV <GradientWord>Premium Content</GradientWord>
                 </Hero.Title>
              </Grid>
              <Grid lg={18} justify="center">
                <Hero.Desc>
                  Elevate your entertainment with content that aligns with your vibe.
                  Subscribe to creator channels you want to tap into, free from algorithms
                  and ads. Earn live $LUV tokens and gifts.
                </Hero.Desc>
              </Grid>
            </Grid.Container>
            <Hero.Actions>
              <Link href={'https://luvgames.luvnft.com'}>
                <Button auto icon={<HeartIcon className="w-6 h-6" />} scale={1.3}>
                  LUV Games
                </Button>
              </Link>
              <Link href={'https://ateam.arvrtise.com'}>
                <Button type="secondary" scale={1.3}>
                  Arvrtise
                </Button>
              </Link>
            </Hero.Actions>
          </Hero>
        </div>
        <div className="hero-bg">
          <Background></Background>
        </div>
      </div>

      <FadeInEffect blur={10} transition={1000}>
        <Partners></Partners>
      </FadeInEffect>

      <Section>
        <Services></Services>
      </Section>

      <ThemeProvider themeType="light">
        <PageLayout>
          <Section>
            <Portfolio></Portfolio>
          </Section>
        </PageLayout>
      </ThemeProvider>

      <ContentLayout padding={0}>
        <Divider width={'100%'}></Divider>
      </ContentLayout>

      <Section>
        <Facts></Facts>
      </Section>

      <RunningSlogan></RunningSlogan>

      <Footer>
        <Footer.Block justify="space-between">
          {metaData.slice(0, 3).map((df, index) => (
            <FooterNavigation title={capitalize(df.name)} key={index}>
              {df.children.slice(0, 5).map((child, childIndex) => (
                <FooterNavigation.Item
                  key={childIndex}
                  href={child.children[0].url || df.url}>
                  {capitalize(child.name)}
                </FooterNavigation.Item>
              ))}
            </FooterNavigation>
          ))}
        </Footer.Block>
        <Footer.Block justify="flex-end"></Footer.Block>
      </Footer>

      <FooterBottom>
        <FooterBottom.Block>
          <div className="logo-footer">
            <BrandLogo size={35}></BrandLogo>
          </div>
        </FooterBottom.Block>
        <FooterBottom.Block justify="flex-end">
          <Text span font={'12px'} style={{ color: theme.palette.accents_5 }}>
            Made with {' '}
            <Link color href="https://luvnft.com" target="_blank">
              LUV NFT
            </Link>
          </Text>
        </FooterBottom.Block>
      </FooterBottom>

      <style jsx>{`
        .logo-footer {
          color: ${theme.palette.foreground};
        }

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 180px 0px;
        }

        .hero {
          position: relative;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
        }
        .hero-bg {
          position: absolute;
          width: 100%;
          bottom: 0;
          opacity: 0.5;
          color: red;
          --color-face-1: ${theme.palette.accents_0};
          --color-face-2: ${theme.palette.accents_2};
          --color-face-3: ${theme.palette.accents_4};
        }
      `}</style>
    </>
  )
}
