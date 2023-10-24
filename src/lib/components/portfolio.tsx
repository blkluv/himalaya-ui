import {
  Button,
  ContentLayout,
  FadeInEffect,
  Grid,
  Hero,
  Link,
  ResponsiveImage,
  Text,
  useTheme,
} from 'components'

export function PortfolioItem({
  image,
  title = '',
  desc = '',
  url,
  width,
  height,
}: {
  image?: string
  title: string
  desc: string
  width: number
  height: number
  url?: string
}) {
  const theme = useTheme()
  return (
    <FadeInEffect translateY="4rem">
      <div className="portfolio">
        {image && (
          <div className="portfolio-image">
            <ResponsiveImage
              alt={title}
              src={image}
              width={width}
              height={height}
              draggable={false}
            />
          </div>
        )}
        <FadeInEffect translateY="4rem">
          <Link font={'24px'} style={{ fontWeight: 'bold' }} my={0}>
            {title}
          </Link>
        </FadeInEffect>
        <FadeInEffect translateY="4rem">
          <Text mt={0} style={{ color: theme.palette.accents_6 }}>
            {desc}
          </Text>
        </FadeInEffect>
        <FadeInEffect translateY="4rem" blur={10}>
          {url && (
            <Link target="_blank" href={url}>
              <Button auto>Source code</Button>
            </Link>
          )}

          {!url && (
            <Button disabled auto>
              Coming soon
            </Button>
          )}
        </FadeInEffect>
        <style jsx>{`
          .img-link {
            width: 100%;
          }
          .portfolio-image {
            width: 100%;
            position: relative;
            border-radius: ${theme.style.radius};
            margin-bottom: 12px;
          }

          .portfolio {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            poistion: relative;
            gap: 12px;
          }
        `}</style>
      </div>
    </FadeInEffect>
  )
}

export default function Portfolio() {
  const theme = useTheme()
  return (
    <ContentLayout>
      <FadeInEffect transition={1000} translateY="4rem">
        <div className="header">
          <FadeInEffect translateY="4rem">
            <Hero.Tag hasGradient={true} gradient={theme.palette.gradient_2}>
              NETWORKS
            </Hero.Tag>
          </FadeInEffect>
          <FadeInEffect translateY="4rem">
            <Text
              margin={0}
              marginTop={'12px'}
              h4
              font={'clamp(24px, 3.1vw, 48px)'}
              style={{ fontWeight: '700', lineHeight: '1.2' }}>
              Diverse, dynamic, and innovative: Explore real projects made with Himalaya.
            </Text>
          </FadeInEffect>
          <FadeInEffect translateY="4rem">
            <Text
              margin={0}
              marginTop={'24px'}
              p
              font={'clamp(14px, 1.2vw, 16px)'}
              style={{ color: theme.palette.accents_6, fontWeight: 400 }}>
              Our UI library stands out with over 3 fully functional demo projects,
              offering real-world application scenarios, and a rich repository of 100+
              examples showcasing its extensive capabilities for diverse design and
              development needs.
            </Text>
          </FadeInEffect>
        </div>
      </FadeInEffect>
      <Grid.Container gap={5} justify="center">
        <Grid xs={24} md={12}>
          <div className="portfolio-list">
            <PortfolioItem
              image="https://ibb.co/PQ7D3Nf"
              width={578}
              height={578}
              title="HEALXYZ"
              desc="The world needs healing. Get paid to share your gift with subscribers in a video, live audio rooms or live on @healxyz. Your talent shines brightest when performed live."
            />
            <PortfolioItem
              image="https://ibb.co/wJnbD77"
              width={578}
              height={578}
              title="LUV GAMES"
              desc="Promote your business with a game to earn $LUV. Go on a live date or post a TikTok video on Zodiac Mate to attract a compatible partner."
            />
          </div>
        </Grid>
        <Grid xs={24} md={12}>
          <div className="portfolio-list">
            <PortfolioItem
              image="https://ibb.co/8PNfPMJ"
              width={578}
              height={578}
              title="ADUBNB"
              desc="Subscribe to hosts, superhosts, and service providers collaborating to address the affordable housing crisis through ADUBNB sales and rentals."
            />
            <PortfolioItem
              width={578}
              height={578}
              image="/images/himalaya-preview.png"
              title="ARVRTISE"
              url="https://ibb.co/HFX6MPL"
              desc="Get live assistance for your marketing needs, promote your business in real-time, or discover exclusive local deals."
            />
          </div>
        </Grid>
      </Grid.Container>

      <style jsx>{`
        .action-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          padding: 48px 0px;
        }
        .header {
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: flex-start;
          margin-bottom: 64px;
        }

        .portfolio-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
          width: 100%;
        }
      `}</style>
    </ContentLayout>
  )
}
