'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

// Breathing patterns with timings in seconds
const patterns = {
  box: {
    name: 'Box Breathing',
    description: 'Equal parts. Used by Navy SEALs.',
    phases: [
      { name: 'Breathe In', duration: 4 },
      { name: 'Hold', duration: 4 },
      { name: 'Breathe Out', duration: 4 },
      { name: 'Hold', duration: 4 },
    ],
  },
  relaxing: {
    name: '4-7-8 Relaxing',
    description: 'Calms the nervous system. Good for sleep.',
    phases: [
      { name: 'Breathe In', duration: 4 },
      { name: 'Hold', duration: 7 },
      { name: 'Breathe Out', duration: 8 },
    ],
  },
  calm: {
    name: 'Simple Calm',
    description: 'Easy and gentle. Good for beginners.',
    phases: [
      { name: 'Breathe In', duration: 4 },
      { name: 'Breathe Out', duration: 6 },
    ],
  },
}

type PatternKey = keyof typeof patterns

// Audio context for sound cues
let audioContext: AudioContext | null = null

function playTone(frequency: number, duration: number, volume: number = 0.1) {
  if (typeof window === 'undefined') return

  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
  }

  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = 'sine'

  gainNode.gain.setValueAtTime(0, audioContext.currentTime)
  gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.05)
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}

export function BreathingTimer() {
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>('box')
  const [isRunning, setIsRunning] = useState(false)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [cycles, setCycles] = useState(0)
  const [totalPhaseTime, setTotalPhaseTime] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const prevPhaseRef = useRef(currentPhaseIndex)

  const pattern = patterns[selectedPattern]
  const currentPhase = pattern.phases[currentPhaseIndex]
  const isInhale = currentPhase?.name === 'Breathe In'
  const isExhale = currentPhase?.name === 'Breathe Out'
  const isHold = currentPhase?.name === 'Hold'

  // Calculate progress for the visual circle (0 to 1)
  const progress = totalPhaseTime > 0 ? 1 - (timeLeft / totalPhaseTime) : 0

  // Start the timer
  const start = useCallback(() => {
    const firstPhase = pattern.phases[0]
    setCurrentPhaseIndex(0)
    setTimeLeft(firstPhase.duration)
    setTotalPhaseTime(firstPhase.duration)
    setCycles(0)
    setIsRunning(true)
  }, [pattern])

  // Stop/pause the timer
  const stop = () => {
    setIsRunning(false)
  }

  // Reset the timer
  const reset = () => {
    setIsRunning(false)
    setCurrentPhaseIndex(0)
    setTimeLeft(0)
    setTotalPhaseTime(0)
    setCycles(0)
  }

  // Timer logic
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          // Move to next phase
          const nextIndex = (currentPhaseIndex + 1) % pattern.phases.length
          const nextPhase = pattern.phases[nextIndex]

          // If we completed a full cycle
          if (nextIndex === 0) {
            setCycles((c) => c + 1)
          }

          setCurrentPhaseIndex(nextIndex)
          setTotalPhaseTime(nextPhase.duration)
          return nextPhase.duration
        }
        return prev - 0.1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isRunning, currentPhaseIndex, pattern.phases])

  // Play sound on phase change
  useEffect(() => {
    if (!isRunning || !soundEnabled) return
    if (prevPhaseRef.current !== currentPhaseIndex) {
      // Different tones for different phases
      const phase = pattern.phases[currentPhaseIndex]
      if (phase.name === 'Breathe In') {
        playTone(396, 0.3) // G4 - ascending feeling
      } else if (phase.name === 'Breathe Out') {
        playTone(264, 0.3) // C4 - descending feeling
      } else if (phase.name === 'Hold') {
        playTone(330, 0.2) // E4 - neutral
      }
      prevPhaseRef.current = currentPhaseIndex
    }
  }, [currentPhaseIndex, isRunning, soundEnabled, pattern.phases])

  // Calculate circle scale based on breath phase
  const getCircleScale = () => {
    if (!isRunning && timeLeft === 0) return 0.6
    if (isInhale) return 0.6 + (progress * 0.4) // 0.6 -> 1.0
    if (isExhale) return 1.0 - (progress * 0.4) // 1.0 -> 0.6
    if (isHold) {
      // Hold at current size
      const prevPhase = pattern.phases[(currentPhaseIndex - 1 + pattern.phases.length) % pattern.phases.length]
      return prevPhase?.name === 'Breathe In' ? 1.0 : 0.6
    }
    return 0.6
  }

  return (
    <div className="card-glass p-6 md:p-8">
      {/* Pattern Selector */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {(Object.keys(patterns) as PatternKey[]).map((key) => (
          <button
            key={key}
            onClick={() => {
              if (!isRunning) {
                setSelectedPattern(key)
                reset()
              }
            }}
            disabled={isRunning}
            className={`
              px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-normal
              ${selectedPattern === key
                ? 'bg-sage text-cream shadow-sm'
                : 'bg-stone-100/50 dark:bg-night-700/50 text-clay dark:text-ash hover:bg-stone-200/50 dark:hover:bg-night-600/50'
              }
              ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {patterns[key].name}
          </button>
        ))}
      </div>

      {/* Pattern Description */}
      <p className="text-center text-sm text-dust dark:text-coal mb-8">
        {pattern.description}
      </p>

      {/* Breathing Circle */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Ambient glow behind everything */}
        <div
          className={`
            absolute w-64 h-64 md:w-72 md:h-72 rounded-full blur-3xl
            transition-all duration-1000
            ${isRunning ? 'opacity-40' : 'opacity-20'}
          `}
          style={{
            background: isHold
              ? 'radial-gradient(circle, rgba(196, 164, 132, 0.5) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(125, 139, 122, 0.5) 0%, transparent 70%)',
            transform: `scale(${isRunning ? getCircleScale() * 1.2 : 1})`,
          }}
        />

        {/* Ripple rings - animate on phase change */}
        {isRunning && (
          <>
            <div
              key={`ripple-1-${currentPhaseIndex}`}
              className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-sage/30 animate-ripple-out"
            />
            <div
              key={`ripple-2-${currentPhaseIndex}`}
              className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-sage/20 animate-ripple-out"
              style={{ animationDelay: '150ms' }}
            />
          </>
        )}

        {/* Outer ring with glow */}
        <div
          className={`
            absolute w-48 h-48 md:w-56 md:h-56 rounded-full
            border-2 transition-all duration-slow
            ${isRunning
              ? isHold
                ? 'border-terracotta/40 shadow-[0_0_30px_rgba(196,164,132,0.3)]'
                : 'border-sage/40 shadow-[0_0_30px_rgba(125,139,122,0.3)]'
              : 'border-stone-200/50 dark:border-night-600/50'
            }
          `}
        />

        {/* Inner pulsing ring */}
        {isRunning && (
          <div
            className={`
              absolute w-40 h-40 md:w-48 md:h-48 rounded-full
              border transition-all duration-normal
              ${isHold ? 'border-terracotta/20' : 'border-sage/20'}
            `}
            style={{
              transform: `scale(${getCircleScale() * 0.95})`,
            }}
          />
        )}

        {/* Animated breathing circle */}
        <div
          className={`
            w-48 h-48 md:w-56 md:h-56
            rounded-full
            flex items-center justify-center
            transition-all
            ${isRunning ? 'duration-fast' : 'duration-slow'}
          `}
          style={{
            transform: `scale(${getCircleScale()})`,
            background: isRunning
              ? `radial-gradient(circle, ${isHold ? 'rgba(196, 164, 132, 0.35)' : 'rgba(125, 139, 122, 0.35)'} 0%, ${isHold ? 'rgba(196, 164, 132, 0.15)' : 'rgba(125, 139, 122, 0.15)'} 60%, transparent 100%)`
              : 'radial-gradient(circle, rgba(125, 139, 122, 0.2) 0%, rgba(125, 139, 122, 0.05) 70%, transparent 100%)',
            boxShadow: isRunning
              ? isHold
                ? 'inset 0 0 40px rgba(196, 164, 132, 0.2)'
                : 'inset 0 0 40px rgba(125, 139, 122, 0.2)'
              : 'none',
          }}
        >
          {/* Inner content */}
          <div className="text-center relative z-10">
            {isRunning ? (
              <>
                <div className={`
                  text-2xl md:text-3xl font-serif font-semibold mb-1
                  transition-colors duration-normal
                  ${isHold ? 'text-terracotta' : 'text-sage'}
                `}>
                  {currentPhase?.name}
                </div>
                <div
                  className="text-4xl md:text-5xl font-light text-bark dark:text-parchment tabular-nums"
                  style={{
                    textShadow: isHold
                      ? '0 0 20px rgba(196, 164, 132, 0.3)'
                      : '0 0 20px rgba(125, 139, 122, 0.3)',
                  }}
                >
                  {Math.ceil(timeLeft)}
                </div>
              </>
            ) : (
              <div className="text-clay dark:text-ash">
                {cycles > 0 ? (
                  <div className="text-center">
                    <div className="text-3xl font-serif text-sage mb-1">{cycles}</div>
                    <div className="text-sm">cycles completed</div>
                  </div>
                ) : (
                  <div className="text-lg">Ready</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Phase indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {pattern.phases.map((phase, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-normal
              ${currentPhaseIndex === index && isRunning
                ? 'bg-sage scale-125'
                : 'bg-stone-200 dark:bg-night-600'
              }
            `}
          />
        ))}
      </div>

      {/* Sound Toggle */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm
            transition-all duration-normal
            ${soundEnabled
              ? 'bg-sage-muted dark:bg-sage-muted-dark text-sage'
              : 'bg-stone-100/50 dark:bg-night-700/50 text-clay dark:text-ash'
            }
          `}
          aria-pressed={soundEnabled}
        >
          {soundEnabled ? <SoundOnIcon className="w-4 h-4" /> : <SoundOffIcon className="w-4 h-4" />}
          <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
        </button>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        {!isRunning ? (
          <button
            onClick={start}
            className="
              flex items-center gap-2
              px-8 py-3
              bg-gradient-to-r from-sage to-moss
              hover:from-sage-dark hover:to-sage
              text-cream font-medium
              rounded-xl
              shadow-medium hover:shadow-elevated
              transition-all duration-normal
              btn-press
            "
          >
            <PlayIcon className="w-5 h-5" />
            <span>{cycles > 0 ? 'Start Again' : 'Start'}</span>
          </button>
        ) : (
          <button
            onClick={stop}
            className="
              flex items-center gap-2
              px-8 py-3
              bg-terracotta hover:bg-terracotta/90
              text-cream font-medium
              rounded-xl
              shadow-medium hover:shadow-elevated
              transition-all duration-normal
              btn-press
            "
          >
            <PauseIcon className="w-5 h-5" />
            <span>Pause</span>
          </button>
        )}

        {(isRunning || cycles > 0) && (
          <button
            onClick={reset}
            className="
              flex items-center gap-2
              px-6 py-3
              bg-stone-100/50 dark:bg-night-700/50
              hover:bg-stone-200/50 dark:hover:bg-night-600/50
              text-clay dark:text-ash font-medium
              rounded-xl
              transition-all duration-normal
              btn-press
            "
          >
            <ResetIcon className="w-5 h-5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Cycle counter during exercise */}
      {isRunning && cycles > 0 && (
        <div className="text-center mt-6 text-sm text-dust dark:text-coal">
          Cycle {cycles + 1} in progress
        </div>
      )}
    </div>
  )
}

// Icons
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  )
}

function ResetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function SoundOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z" />
    </svg>
  )
}

function SoundOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
  )
}
