import { SVGProps } from 'react'

const EmptyCheckBoxIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fill='#F6F6F6'
        stroke='#E8E8E8'
      />
    </svg>
  )
}

export default EmptyCheckBoxIcon
