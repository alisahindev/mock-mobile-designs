
type ProjectMiniCardProps = {
  category: string
  titleLine1: string
  titleLine2: string
  backgroundColor: string
  progressColor: string
  progressPercent: number
}

export default function ProjectMiniCard({ category, titleLine1, titleLine2, backgroundColor, progressColor, progressPercent }: ProjectMiniCardProps) {
  const clamped = Math.max(0, Math.min(100, progressPercent))
  return (
    <article className="rounded-[19px] p-4 w-full" style={{ backgroundColor }}>
      <p className="text-xs text-muted-foreground mb-1">{category}</p>
      <h3 className="text-sm text-foreground leading-tight">
        {titleLine1}<br />
        {titleLine2}
      </h3>
      <div className="mt-3 h-1.5 rounded" style={{ backgroundColor: 'color-mix(in oklab, var(--card) 80%, var(--foreground) 0%)' }} aria-hidden="true">
        <div className="h-1.5 rounded" style={{ width: `${clamped}%`, backgroundColor: progressColor }} />
      </div>
    </article>
  )
}


