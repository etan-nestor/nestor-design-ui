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
  
  // Accessibilité
  'aria-label'?: string
  
  // Style personnalisé
  className?: string
  style?: React.CSSProperties
  
  // Événements (corrections)
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
}

// Variantes de style prédéfinies
export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
  ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  link: 'text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500',
  destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 focus:ring-white/50',
  neon: 'bg-blue-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] focus:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
  gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
} as const

// Tailles prédéfinies
export const BUTTON_SIZES: Record<ButtonSize, string> = {
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
export const BUTTON_SHAPES: Record<ButtonShape, string> = {
  default: 'rounded-md',
  rounded: 'rounded-lg',
  pill: 'rounded-full',
  square: 'rounded-none',
  circle: 'rounded-full',
} as const

// Animations prédéfinies
export const BUTTON_ANIMATIONS: Record<ButtonAnimation, string> = {
  none: '',
  bounce: 'hover:animate-bounce',
  pulse: 'hover:animate-pulse',
  scale: 'hover:scale-105 active:scale-95 transition-transform',
  slide: 'hover:translate-y-[-2px] transition-transform',
  glow: 'transition-shadow duration-300',
  shimmer: 'relative overflow-hidden',
} as const