import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utilitaire pour combiner et fusionner les classes Tailwind CSS
 * Utilise clsx pour la logique conditionnelle et twMerge pour éviter les conflits
 * 
 * @param inputs - Classes CSS à combiner
 * @returns String de classes CSS optimisées
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}