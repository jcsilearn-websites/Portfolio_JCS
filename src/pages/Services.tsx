import ServicesTabs from '../sections/ServicesTabs'
import Container from '../components/Container'

export default function Services() {
  return (
    <main>
      <section className="bg-navy py-16 text-center">
        <Container>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-pale-blue-bg sm:text-lg">
            Programs designed for Universities, Corporates, Startups,
            Schools, and Professionals.
          </p>
        </Container>
      </section>
      <ServicesTabs />
    </main>
  )
}
