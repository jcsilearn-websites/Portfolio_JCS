interface PagePlaceholderProps {
  title: string
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-pale-blue-bg px-6 py-24 sm:px-10 lg:px-20 xl:px-32">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
        <p className="mt-3 text-pale-blue-text">Content coming soon.</p>
      </div>
    </main>
  )
}
