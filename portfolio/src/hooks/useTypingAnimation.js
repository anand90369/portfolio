import { useState, useEffect, useCallback } from 'react'

export function useTypingAnimation(strings, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const current = strings[stringIndex]

    if (!isDeleting) {
      setText(current.substring(0, text.length + 1))
      if (text.length === current.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
    } else {
      setText(current.substring(0, text.length - 1))
      if (text.length === 0) {
        setIsDeleting(false)
        setStringIndex((prev) => (prev + 1) % strings.length)
      }
    }
  }, [text, stringIndex, isDeleting, strings, pauseTime])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return text
}
