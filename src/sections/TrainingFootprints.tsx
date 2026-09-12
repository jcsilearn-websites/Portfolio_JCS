import { motion } from 'framer-motion'
import { trainingFootprints } from '../data/content'
import Container from '../components/Container'
import PhotoSlideshow from '../components/PhotoSlideshow'

export default function TrainingFootprints() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <ol className="mx-auto max-w-3xl">
          {trainingFootprints.map((footprint, index) => (
            <motion.li
              key={`${footprint.collegeName}-${footprint.dateRange}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(index * 0.04, 0.3) }}
              className="flex gap-4 sm:gap-6"
            >
              <div className="flex flex-col items-center">
                <span className="mt-6 h-3 w-3 shrink-0 rounded-full border-2 border-white bg-gold shadow-[0_0_0_3px_rgba(244,180,0,0.2)]" />
                {index < trainingFootprints.length - 1 && (
                  <span className="mt-2 w-0.5 flex-1 bg-pale-blue-bg" />
                )}
              </div>

              <div className="flex-1 pb-10">
                <div className="rounded-2xl border border-black bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
                  <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy sm:text-sm">
                    {footprint.dateRange}
                  </span>

                  <div className="mt-4 h-12">
                    {footprint.logo && (
                      <img
                        src={footprint.logo}
                        alt={footprint.collegeName}
                        className="h-full w-auto max-w-[140px] object-contain object-left"
                      />
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-black sm:text-xl">
                    {footprint.programName}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-black sm:text-base">
                    {footprint.collegeName}
                  </p>

                  {footprint.photos && footprint.photos.length > 1 ? (
                    <PhotoSlideshow
                      photos={footprint.photos}
                      alt={`${footprint.programName} at ${footprint.collegeName}`}
                      className="mt-4 aspect-video w-full rounded-xl border border-black/10"
                    />
                  ) : footprint.photos && footprint.photos.length === 1 ? (
                    <img
                      src={footprint.photos[0]}
                      alt={`${footprint.programName} at ${footprint.collegeName}`}
                      className="mt-4 aspect-video w-full rounded-xl border border-black/10 object-cover"
                    />
                  ) : (
                    <div className="mt-4 aspect-video w-full rounded-xl border border-black/10 bg-white" />
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
