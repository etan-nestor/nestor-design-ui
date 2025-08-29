import { ButtonHTMLAttributes, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

// Variants de style du bouton
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'link' 
  | 'destructive'
  | 'success'
  | 'warning'
  | 'glass'
  | 'neon'
  | 'gradient'

// Tailles du bouton
export type ButtonSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl'
  | 'icon-sm'
  | 'icon-md' 
  | 'icon-lg'

// Formes du bouton
export type ButtonShape = 
  | 'default' 
  | 'rounded' 
  | 'pill' 
  | 'square' 
  | 'circle'

// Animation du bouton
export type ButtonAnimation = 
  | 'none'
  | 'bounce'
  | 'pulse'
  | 'scale'
  | 'slide'
  | 'glow'
  | 'shimmer'

// Position de l'icône
export type IconPosition = 'left' | 'right' | 'only'

// Configuration de l'icône
export interface IconConfig {
  icon: LucideIcon | ReactNode
  position?: IconPosition
  size?: number
  className?: string
}

// Props du composant Button
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  // Contenu
  children?: ReactNode
  
  // Style
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
  
  // État
  loading?: boolean
  disabled?: boolean
  
  // Icônes
  icon?: IconConfig
  leftIcon?: LucideIcon | ReactNode
  rightIcon?: LucideIcon | ReactNode
  
  // Animation
  animation?: ButtonAnimation
  animationDuration?: string
  
  // Apparence avancée
  glass?: boolean
  glow?: boolean
  shadow?: boolean
  gradient?: string
  
  // Interaction
  ripple?: boolean
  haptic?: boolean
  
  // Accessibilité
  'aria-label'?: string
  tooltip?: string
  
  // Style personnalisé
  className?: string
  style?: React.CSSProperties
  
  // Événements
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
}

// Variantes de style prédéfinies
export const BUTTON_VARIANTS = {
  primary: 'bg-nestor-600 text-white hover:bg-nestor-700 focus:ring-nestor-500',
  secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500',
  outline: 'border-2 border-nestor-600 text-nestor-600 hover:bg-nestor-600 hover:text-white focus:ring-nestor-500',
  ghost: 'text-nestor-600 hover:bg-nestor-50 focus:ring-nestor-500',
  link: 'text-nestor-600 underline-offset-4 hover:underline focus:ring-nestor-500',
  destructive: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500',
  success: 'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500',
  warning: 'bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500',
  glass: 'glass text-white border-white/20 hover:bg-white/20 focus:ring-white/50',
  neon: 'bg-nestor-600 text-white hover:shadow-neon-hover focus:shadow-neon',
  gradient: 'bg-gradient-to-r from-nestor-600 to-purple-600 text-white hover:from-nestor-700 hover:to-purple-700',
} as const

// Tailles prédéfinies
export const BUTTON_SIZES = {
  xs: 'h-6 px-2 text-xs',
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-8 text-base',
  xl: 'h-12 px-8 text-lg',
  'icon-sm': 'h-8 w-8 p-0',
  'icon-md': 'h-10 w-10 p-0',
  'icon-lg': 'h-11 w-11 p-0',
} as const

// Formes prédéfinies
export const BUTTON_SHAPES = {
  default: 'rounded-md',
  rounded: 'rounded-lg',
  pill: 'rounded-full',
  square: 'rounded-none',
  circle: 'rounded-full',
} as const

// Animations prédéfinies
export const BUTTON_ANIMATIONS = {
  none: '',
  bounce: 'hover:animate-bounce-subtle',
  pulse: 'hover:animate-pulse-slow',
  scale: 'hover:scale-105 active:scale-95',
  slide: 'hover:translate-y-[-2px]',
  glow: 'hover:animate-glow',
  shimmer: 'relative overflow-hidden hover:animate-shimmer',
} as const