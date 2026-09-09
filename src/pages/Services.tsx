import ServicesTabs from '../sections/ServicesTabs'
import Container from '../components/Container'
import servicesHeroImage from '../assets/Our-service/ChatGPT Image Sep 10, 2026, 01_44_19 AM.png'

export default function Services() {
  return (
    <main>
      <section
        className="bg-navy bg-cover bg-center bg-no-repeat py-16 text-center"
        style={{ backgroundImage: `url(${servicesHeroImage})` }}
      >
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
