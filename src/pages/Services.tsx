import ServicesTabs from '../sections/ServicesTabs'

export default function Services() {
  return (
    <main>
      <section className="bg-navy px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-pale-blue-bg sm:text-lg">
          Programs designed for Universities, Corporates, Startups, Schools,
          and Professionals.
        </p>
      </section>
      <ServicesTabs />
    </main>
  )
}
