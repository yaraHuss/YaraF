import { ElementType, ReactNode, CSSProperties } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface RevealProps {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export default function Reveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  style,
}: RevealProps) {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 })

  return (
    <Component
      ref={ref as any}
      className={`transition-all duration-700 ease-out opacity-0 translate-y-6 ${
        visible ? 'opacity-100 translate-y-0' : ''
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  )
}
