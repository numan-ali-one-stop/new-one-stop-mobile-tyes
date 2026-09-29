export default function JsonLd({ data, className }: { data: object; className?: string }) {
  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
