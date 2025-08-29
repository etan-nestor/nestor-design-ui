import React$1, { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { ClassValue } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive' | 'success' | 'warning' | 'glass' | 'neon' | 'gradient';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon-sm' | 'icon-md' | 'icon-lg';
type ButtonShape = 'default' | 'rounded' | 'pill' | 'square' | 'circle';
type ButtonAnimation = 'none' | 'bounce' | 'pulse' | 'scale' | 'slide' | 'glow' | 'shimmer';
type IconPosition = 'left' | 'right' | 'only';
interface IconConfig {
    icon: LucideIcon | ReactNode;
    position?: IconPosition;
    size?: number;
    className?: string;
}
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    loading?: boolean;
    disabled?: boolean;
    icon?: IconConfig;
    leftIcon?: LucideIcon | ReactNode;
    rightIcon?: LucideIcon | ReactNode;
    animation?: ButtonAnimation;
    animationDuration?: string;
    glass?: boolean;
    glow?: boolean;
    shadow?: boolean;
    gradient?: string;
    ripple?: boolean;
    haptic?: boolean;
    'aria-label'?: string;
    tooltip?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onHover?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}
declare const BUTTON_VARIANTS: {
    readonly primary: "bg-nestor-600 text-white hover:bg-nestor-700 focus:ring-nestor-500";
    readonly secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500";
    readonly outline: "border-2 border-nestor-600 text-nestor-600 hover:bg-nestor-600 hover:text-white focus:ring-nestor-500";
    readonly ghost: "text-nestor-600 hover:bg-nestor-50 focus:ring-nestor-500";
    readonly link: "text-nestor-600 underline-offset-4 hover:underline focus:ring-nestor-500";
    readonly destructive: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500";
    readonly success: "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500";
    readonly warning: "bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500";
    readonly glass: "glass text-white border-white/20 hover:bg-white/20 focus:ring-white/50";
    readonly neon: "bg-nestor-600 text-white hover:shadow-neon-hover focus:shadow-neon";
    readonly gradient: "bg-gradient-to-r from-nestor-600 to-purple-600 text-white hover:from-nestor-700 hover:to-purple-700";
};
declare const BUTTON_SIZES: {
    readonly xs: "h-6 px-2 text-xs";
    readonly sm: "h-8 px-3 text-sm";
    readonly md: "h-10 px-4 text-sm";
    readonly lg: "h-11 px-8 text-base";
    readonly xl: "h-12 px-8 text-lg";
    readonly 'icon-sm': "h-8 w-8 p-0";
    readonly 'icon-md': "h-10 w-10 p-0";
    readonly 'icon-lg': "h-11 w-11 p-0";
};
declare const BUTTON_SHAPES: {
    readonly default: "rounded-md";
    readonly rounded: "rounded-lg";
    readonly pill: "rounded-full";
    readonly square: "rounded-none";
    readonly circle: "rounded-full";
};
declare const BUTTON_ANIMATIONS: {
    readonly none: "";
    readonly bounce: "hover:animate-bounce-subtle";
    readonly pulse: "hover:animate-pulse-slow";
    readonly scale: "hover:scale-105 active:scale-95";
    readonly slide: "hover:translate-y-[-2px]";
    readonly glow: "hover:animate-glow";
    readonly shimmer: "relative overflow-hidden hover:animate-shimmer";
};

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
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

/**
 * Utilitaire pour combiner et fusionner les classes Tailwind CSS
 * Utilise clsx pour la logique conditionnelle et twMerge pour éviter les conflits
 *
 * @param inputs - Classes CSS à combiner
 * @returns String de classes CSS optimisées
 */
declare function cn(...inputs: ClassValue[]): string;

export { BUTTON_ANIMATIONS, BUTTON_SHAPES, BUTTON_SIZES, BUTTON_VARIANTS, Button, type ButtonAnimation, type ButtonProps, type ButtonShape, type ButtonSize, type ButtonVariant, type IconConfig, type IconPosition, cn };
