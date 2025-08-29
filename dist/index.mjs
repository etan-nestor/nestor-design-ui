// src/components/Button/Button.tsx
import React, { forwardRef, useState, useCallback } from "react";
import { Loader2 } from "lucide-react";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button/Button.types.ts
var BUTTON_VARIANTS = {
  primary: "bg-nestor-600 text-white hover:bg-nestor-700 focus:ring-nestor-500",
  secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500",
  outline: "border-2 border-nestor-600 text-nestor-600 hover:bg-nestor-600 hover:text-white focus:ring-nestor-500",
  ghost: "text-nestor-600 hover:bg-nestor-50 focus:ring-nestor-500",
  link: "text-nestor-600 underline-offset-4 hover:underline focus:ring-nestor-500",
  destructive: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500",
  success: "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500",
  warning: "bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-500",
  glass: "glass text-white border-white/20 hover:bg-white/20 focus:ring-white/50",
  neon: "bg-nestor-600 text-white hover:shadow-neon-hover focus:shadow-neon",
  gradient: "bg-gradient-to-r from-nestor-600 to-purple-600 text-white hover:from-nestor-700 hover:to-purple-700"
};
var BUTTON_SIZES = {
  xs: "h-6 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-8 text-base",
  xl: "h-12 px-8 text-lg",
  "icon-sm": "h-8 w-8 p-0",
  "icon-md": "h-10 w-10 p-0",
  "icon-lg": "h-11 w-11 p-0"
};
var BUTTON_SHAPES = {
  default: "rounded-md",
  rounded: "rounded-lg",
  pill: "rounded-full",
  square: "rounded-none",
  circle: "rounded-full"
};
var BUTTON_ANIMATIONS = {
  none: "",
  bounce: "hover:animate-bounce-subtle",
  pulse: "hover:animate-pulse-slow",
  scale: "hover:scale-105 active:scale-95",
  slide: "hover:translate-y-[-2px]",
  glow: "hover:animate-glow",
  shimmer: "relative overflow-hidden hover:animate-shimmer"
};

// src/components/Button/Button.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Button = forwardRef(({
  // Contenu
  children,
  // Style de base
  variant = "primary",
  size = "md",
  shape = "default",
  // État
  loading = false,
  disabled = false,
  // Icônes
  icon,
  leftIcon,
  rightIcon,
  // Animation
  animation = "scale",
  animationDuration = "200ms",
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
  type = "button",
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  const [ripples, setRipples] = useState([]);
  const createRipple = useCallback((event) => {
    if (!ripple || disabled || loading) return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size2 = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size2 / 2;
    const y = event.clientY - rect.top - size2 / 2;
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }, [ripple, disabled, loading]);
  const handleClick = useCallback((event) => {
    if (disabled || loading) return;
    createRipple(event);
    onClick?.(event);
  }, [disabled, loading, onClick, createRipple]);
  const getIconConfig = () => {
    if (loading) {
      return {
        icon: Loader2,
        position: icon?.position || (leftIcon ? "left" : rightIcon ? "right" : "only"),
        className: "animate-spin"
      };
    }
    if (icon) return icon;
    if (leftIcon) {
      return { icon: leftIcon, position: "left" };
    }
    if (rightIcon) {
      return { icon: rightIcon, position: "right" };
    }
    return null;
  };
  const iconConfig = getIconConfig();
  const isIconOnly = iconConfig?.position === "only" || !children && iconConfig;
  const buttonClasses = cn(
    // Classes de base
    "relative inline-flex items-center justify-center",
    "font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "select-none overflow-hidden",
    // Variant
    glass ? "glass" : BUTTON_VARIANTS[variant],
    // Taille
    isIconOnly && size.startsWith("icon") ? BUTTON_SIZES[size] : isIconOnly ? BUTTON_SIZES[`icon-${size}`] || BUTTON_SIZES["icon-md"] : BUTTON_SIZES[size],
    // Forme
    BUTTON_SHAPES[shape],
    // Animation
    !disabled && !loading && BUTTON_ANIMATIONS[animation],
    // Effets visuels
    shadow && !glass && "shadow-md hover:shadow-lg",
    glow && "shadow-glow",
    // Style disabled/loading
    (disabled || loading) && "cursor-not-allowed",
    className
  );
  const renderIcon = () => {
    if (!iconConfig) return null;
    const { icon: IconComponent, size: iconSize = 16, className: iconClassName } = iconConfig;
    if (React.isValidElement(IconComponent)) {
      return React.cloneElement(IconComponent, {
        ..."className" in (IconComponent.props || {}) ? { className: cn("flex-shrink-0", iconClassName) } : {},
        ..."size" in (IconComponent.props || {}) ? { size: iconSize } : {}
      });
    }
    if (typeof IconComponent === "function") {
      const Icon = IconComponent;
      return /* @__PURE__ */ jsx(Icon, { className: cn("flex-shrink-0", iconClassName), size: iconSize });
    }
    return IconComponent;
  };
  const buttonContent = /* @__PURE__ */ jsxs(Fragment, { children: [
    iconConfig?.position === "left" && /* @__PURE__ */ jsx("span", { className: cn("mr-2", isIconOnly && "mr-0"), children: renderIcon() }),
    children && !isIconOnly && /* @__PURE__ */ jsx("span", { className: "flex-1", children }),
    isIconOnly && renderIcon(),
    iconConfig?.position === "right" && /* @__PURE__ */ jsx("span", { className: cn("ml-2", isIconOnly && "ml-0"), children: renderIcon() }),
    ripple && ripples.map((rippleItem) => /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute pointer-events-none",
        style: {
          left: rippleItem.x,
          top: rippleItem.y,
          width: "100px",
          height: "100px"
        },
        children: /* @__PURE__ */ jsx("span", { className: "block w-full h-full bg-white/30 rounded-full animate-ping" })
      },
      rippleItem.id
    )),
    animation === "shimmer" && !disabled && !loading && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" })
  ] });
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type,
      className: buttonClasses,
      disabled: disabled || loading,
      "aria-label": ariaLabel || (typeof children === "string" ? children : void 0),
      "aria-disabled": disabled || loading,
      style: {
        ...style,
        animationDuration,
        ...gradient && {
          background: gradient
        }
      },
      onClick: handleClick,
      onMouseEnter: onHover,
      onFocus,
      onBlur,
      ...props,
      children: buttonContent
    }
  );
});
Button.displayName = "Button";
export {
  BUTTON_ANIMATIONS,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Button,
  cn
};
//# sourceMappingURL=index.mjs.map