import React, { forwardRef, useState, useCallback } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'
import {
  ButtonProps,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_SHAPES,
  BUTTON_ANIMATIONS,
  IconPosition
} from './Button.types'

/**
 * Composant Button ultra-flexible et personnalisable
 * 
 * Features:
 * - Multiple variants (primary, secondary, outline, glass, neon, etc.)
 * - Différentes tailles et formes
 * - Support des icônes (gauche, droite, seule)
 * - Animations et effets visuels
 * - Loading state avec spinner
 * - Effet ripple au clic
 * - Glassmorphism et effets neon
 * - Accessibilité complète
 * - TypeScript strict
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  // Contenu
  children,
  
  // Style de base
  variant = 'primary',
  size = 'md',
  shape = 'default',
  
  // État
  loading = false,
  disabled = false,
  
  // Icônes
  icon,
  leftIcon,
  rightIcon,
  
  // Animation
  animation = 'scale',
  animationDuration = '200ms',
  
  // Apparence avancée
  glass = false,
  glow = false,
  shadow = true,
  gradient,
  
  // Interaction
  ripple = true,
  
  // Style personnalisé
  className,
  style,
  
  // Événements
  onClick,
  onHover,
  onFocus,
  onBlur,
  
  // Props HTML natives
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  // État local pour l'effet ripple
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  
  // Gestion de l'effet ripple
  const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ripple || disabled || loading) return
    
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    }
    
    setRipples(prev => [...prev, newRipple])
    
    // Nettoyer le ripple après l'animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }, [ripple, disabled, loading])
  
  // Gestion du clic
  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    
    createRipple(event)
    onClick?.(event)
  }, [disabled, loading, onClick, createRipple])
  
  // Détermination de l'icône à afficher
  const getIconConfig = () => {
    if (loading) {
      return {
        icon: Loader2,
        position: (icon?.position || (leftIcon ? 'left' : rightIcon ? 'right' : 'only')) as IconPosition,
        className: 'animate-spin'
      }
    }
    
    if (icon) return icon
    
    if (leftIcon) {
      return { icon: leftIcon, position: 'left' as IconPosition }
    }
    
    if (rightIcon) {
      return { icon: rightIcon, position: 'right' as IconPosition }
    }
    
    return null
  }
  
  const iconConfig = getIconConfig()
  const isIconOnly = iconConfig?.position === 'only' || (!children && iconConfig)
  
  // Construction des classes CSS
  const buttonClasses = cn(
    // Classes de base
    'relative inline-flex items-center justify-center',
    'font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'select-none overflow-hidden',
    
    // Variant
    glass ? 'glass' : BUTTON_VARIANTS[variant],
    
    // Taille
    isIconOnly && size.startsWith('icon') 
      ? BUTTON_SIZES[size as keyof typeof BUTTON_SIZES]
      : isIconOnly
      ? BUTTON_SIZES[`icon-${size}` as keyof typeof BUTTON_SIZES] || BUTTON_SIZES['icon-md']
      : BUTTON_SIZES[size],
    
    // Forme
    BUTTON_SHAPES[shape],
    
    // Animation
    !disabled && !loading && BUTTON_ANIMATIONS[animation],
    
    // Effets visuels
    shadow && !glass && 'shadow-md hover:shadow-lg',
    glow && 'shadow-glow',
    
    // Style disabled/loading
    (disabled || loading) && 'cursor-not-allowed',
    
    className
  )
  
  // Rendu de l'icône
  const renderIcon = () => {
    if (!iconConfig) return null
    
    const { icon: IconComponent, size: iconSize = 16, className: iconClassName } = iconConfig
    
    if (React.isValidElement(IconComponent)) {
      return React.cloneElement(IconComponent as React.ReactElement, {
        ...('className' in (IconComponent.props || {}) ? { className: cn('flex-shrink-0', iconClassName) } : {}),
        ...('size' in (IconComponent.props || {}) ? { size: iconSize } : {})
      })
    }
    
    if (typeof IconComponent === 'function') {
      const Icon = IconComponent as React.ComponentType<any>
      return <Icon className={cn('flex-shrink-0', iconClassName)} size={iconSize} />
    }
    
    return IconComponent
  }
  
  // Contenu du bouton
  const buttonContent = (
    <>
      {/* Icône gauche */}
      {iconConfig?.position === 'left' && (
        <span className={cn('mr-2', isIconOnly && 'mr-0')}>
          {renderIcon()}
        </span>
      )}
      
      {/* Contenu textuel */}
      {children && !isIconOnly && (
        <span className="flex-1">{children}</span>
      )}
      
      {/* Icône seule */}
      {isIconOnly && renderIcon()}
      
      {/* Icône droite */}
      {iconConfig?.position === 'right' && (
        <span className={cn('ml-2', isIconOnly && 'ml-0')}>
          {renderIcon()}
        </span>
      )}
      
      {/* Effet ripple */}
      {ripple && ripples.map(rippleItem => (
        <span
          key={rippleItem.id}
          className="absolute pointer-events-none"
          style={{
            left: rippleItem.x,
            top: rippleItem.y,
            width: '100px',
            height: '100px',
          }}
        >
          <span className="block w-full h-full bg-white/30 rounded-full animate-ping" />
        </span>
      ))}
      
      {/* Effet shimmer pour l'animation shimmer */}
      {animation === 'shimmer' && !disabled && !loading && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      )}
    </>
  )
  
  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-disabled={disabled || loading}
      style={{
        ...style,
        animationDuration,
        ...(gradient && {
          background: gradient,
        }),
      }}
      onClick={handleClick}
      onMouseEnter={onHover}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    >
      {buttonContent}
    </button>
  )
})

Button.displayName = 'Button'