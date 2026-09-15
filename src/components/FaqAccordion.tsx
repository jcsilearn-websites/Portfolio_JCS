import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi2'

export interface FaqAccordionItem {
  question: string
  answer: ReactNode
}

// Multiple rows can be open at once — each tracked independently via a Set of open
// indices, rather than single-open accordion-exclusive behavior, since these are short,
// unrelated answers.
export default function FaqAccordion({ items }: { items: FaqAccordionItem[] }) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())

  const toggle = (index: number) => {
    setOpenIndices((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, index) => {
        const isOpen = openIndices.has(index)
        const isLast = index === items.length - 1
        return (
          <div
            key={item.question}
            className={isLast ? '' : 'border-b border-navy/10'}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base font-bold text-navy sm:text-lg">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="shrink-0 text-navy"
              >
                <HiChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 text-base leading-relaxed text-black">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
