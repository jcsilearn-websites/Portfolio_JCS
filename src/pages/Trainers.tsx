import TrainingFootprints from '../sections/TrainingFootprints'
import Container from '../components/Container'

export default function Trainers() {
  return (
    <main>
      <section className="bg-pale-blue-bg px-6 py-20 text-center sm:py-24">
        <Container>
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">Our Trainers</h1>
          <p className="mx-auto mt-3 max-w-xl text-pale-blue-text">
            Trainer profiles coming soon.
          </p>
        </Container>
      </section>
      <TrainingFootprints />
    </main>
  )
}
