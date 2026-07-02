import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  path?: string
}

export default function SEO({ title, description, path = '/' }: SEOProps) {
  const url = `https://www.yarafdigital.com${path}`
  return (
    <Helmet>
      <title>{title} | YARAF Digital</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={`${title} | YARAF Digital`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  )
}
