'use client'

import { useEffect, useCallback } from 'react'

interface SparkParticle {
  id: number
  x: number
  y: number
  color: string
  duration: number
  angle: number
  distance: number
}

const SPARK_COLORS = [
  'spark-orange',
  'spark-yellow',
  'spark-green',
  'spark-white',
  'spark-orange',
  'spark-yellow',
]

export function SparkEffect() {
  const createSparks = useCallback((e: MouseEvent) => {
    // Don't create sparks if clicking on interactive elements (except for visual feedback)
    const target = e.target as HTMLElement
    const isInteractive = target.closest('button, a, input, textarea, select, [role="button"]')
    
    // Reduce spark count for interactive elements
    const sparkCount = isInteractive ? 8 : Math.floor(Math.random() * 10) + 15

    const container = document.createElement('div')
    container.className = 'spark-container'
    document.body.appendChild(container)

    const sparks: SparkParticle[] = []

    for (let i = 0; i < sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2 // Random angle in radians
      const distance = Math.random() * 100 + 50 // 50-150px travel distance
      const duration = Math.random() * 300 + 300 // 300-600ms duration

      const spark: SparkParticle = {
        id: i,
        x: e.clientX,
        y: e.clientY,
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
        duration,
        angle,
        distance,
      }
      sparks.push(spark)

      const sparkEl = document.createElement('div')
      sparkEl.className = `spark-particle ${spark.color}`
      
      // Calculate final position based on angle and distance
      const finalX = Math.cos(angle) * distance
      const finalY = Math.sin(angle) * distance
      
      // Add some gravity effect - sparks fall slightly
      const gravityOffset = Math.random() * 30 + 10
      
      sparkEl.style.cssText = `
        left: ${spark.x}px;
        top: ${spark.y}px;
        --spark-x: ${finalX}px;
        --spark-y: ${finalY + gravityOffset}px;
        --spark-duration: ${duration}ms;
        width: ${Math.random() * 3 + 2}px;
        height: ${Math.random() * 3 + 2}px;
      `

      container.appendChild(sparkEl)
    }

    // Clean up after longest animation completes
    setTimeout(() => {
      container.remove()
    }, 700)
  }, [])

  useEffect(() => {
    document.addEventListener('click', createSparks)
    
    return () => {
      document.removeEventListener('click', createSparks)
    }
  }, [createSparks])

  return null
}

