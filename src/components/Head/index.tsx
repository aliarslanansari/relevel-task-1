import { Helmet } from 'react-helmet'

interface HeadPropsTypes {
  title: string
  description?: string
}

const Head = (props: HeadPropsTypes) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name='description' content={props.title}></meta>
    </Helmet>
  )
}

export default Head
