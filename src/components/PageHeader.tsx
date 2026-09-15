interface PageHeaderProps {
  eyebrow: string
  title: string
}

// Shared eyebrow + gold underline + title block — same pattern used site-wide above a
// page/section's main heading (e.g. "LEGAL" above "Privacy Policy"). Extracted out of
// LegalPageLayout so non-long-form pages (card grids, etc.) can reuse the exact header
// without inheriting the max-w-4xl reading-width wrapper meant for legal body text.
export default function PageHeader({ eyebrow, title }: PageHeaderProps) {
  return (
    <>
      <p className="text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
        {eyebrow}
      </p>
      <span className="mt-1 block h-0.5 w-10 rounded-full bg-gold" />

      <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
    </>
  )
}
