import { SVGProps } from 'react'
import { colors } from '../../utils/themes/colors'

const CrossIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      color={colors.grey.grey4}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        stroke={colors.grey.grey3}
        strokeWidth={2}
        strokeLinecap='round'
        d='M7.05029 17.0009L17.0009 7.05024'
      />
      <path
        stroke={colors.grey.grey3}
        strokeWidth={2}
        strokeLinecap='round'
        d='M17.0009 16.9498L7.05031 6.99915'
      />
    </svg>
  )
}

export default CrossIcon
