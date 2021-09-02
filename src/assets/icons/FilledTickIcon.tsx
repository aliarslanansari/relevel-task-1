import { SVGProps } from 'react'
import { colors } from '../../utils/themes/colors'

const FilledIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect
        x={0.5}
        y={0.5}
        width={15}
        height={15}
        rx={3.5}
        strokeWidth={2}
        fill={colors.theme.lightMode.primary}
        stroke={colors.theme.lightMode.secondary}
      />
      <path
        d='M4 8.375L6.667 11 11.2 4.875'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </svg>
  )
}

export default FilledIcon
