/**@type {import('next').NextConfig} */

import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import mapBox from '@mapbox/rehype-prism'
import joinLine from 'rehype-join-line'
import anylizer from '@next/bundle-analyzer'
import remarkMdx from 'remark-mdx'

const withMDX = createMDX({
  extension: /\.(md|mdx)?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkMdx, remarkGfm],
    rehypePlugins: [mapBox, joinLine],
  },
})

const withBundleAnalyzer = anylizer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  generateEtags: false,
  poweredByHeader: false,
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  env: {
    VERSION: '',
    SITE_URL: 'https://nftv.luvnft.com',
  },
  trailingSlash: false,
  images: {
    domains: ['luvnft.com', 'www.luvnft.com', '**'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**'
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/icons',
        permanent: true,
        destination: '/components/icons',
      },
      {
        source: '/products',
        destination: '/',
        permanent: true,
      },
      {
        source: '/guide/scaleable',
        destination: '/guide/scale',
        permanent: true,
      },
      {
        source: '/components',
        permanent: true,
        destination: '/creators/text',
      },
      {
        source: '/guide',
        permanent: true,
        destination: '/guide',
      },
      {
        source: '/web5',
        permanent: true,
        destination: '/web5/use-keyboard',
      },
    ]
  },
}

export default withBundleAnalyzer(withMDX(nextConfig))
