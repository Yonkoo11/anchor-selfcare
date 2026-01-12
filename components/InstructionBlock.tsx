interface InstructionBlockProps {
  steps: string[]
  closingNote?: string
}

export function InstructionBlock({ steps, closingNote = "That's enough for now." }: InstructionBlockProps) {
  return (
    <div className="mt-5">
      {/* Numbered steps with custom styling */}
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4 items-start">
            {/* Step number */}
            <span className="
              flex-shrink-0
              w-7 h-7
              flex items-center justify-center
              rounded-full
              bg-sage-muted dark:bg-sage-muted-dark
              text-sage text-sm font-medium
            ">
              {index + 1}
            </span>
            {/* Step text */}
            <span className="text-earth dark:text-limestone leading-relaxed pt-0.5">
              {step}
            </span>
          </li>
        ))}
      </ol>

      {/* Closing note */}
      {closingNote && (
        <p className="
          mt-6 pt-4
          border-t border-stone-100 dark:border-night-600
          text-dust dark:text-coal text-sm italic
        ">
          {closingNote}
        </p>
      )}
    </div>
  )
}
