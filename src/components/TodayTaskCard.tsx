
type TodayTaskCardProps = {
  progressPercent: number
  onView?: () => void
}

export default function TodayTaskCard({ progressPercent, onView }: TodayTaskCardProps) {
  const clamped = Math.max(0, Math.min(100, progressPercent))
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const dash = (clamped / 100) * circumference

  return (
    <section
      className="relative rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] mx-6 mt-2 mb-6"
      style={{ backgroundColor: 'var(--primary)' }}
      aria-labelledby="today-task-title"
    >
      <div className="px-6 py-5 pr-32">
        <h2 id="today-task-title" className="text-white text-sm font-normal">Your today’s task</h2>
        <p className="text-white text-sm">almost done!</p>
        <button
          type="button"
          onClick={onView}
          className="mt-3 inline-flex items-center justify-center h-9 px-4 rounded-[12px] bg-white text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          style={{ color: 'var(--primary)' }}
          aria-label="Görevleri görüntüle"
        >
          View Task
        </button>
      </div>
      <div className="absolute right-5 top-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="relative w-[76px] h-[76px]">
          <svg width="76" height="76" viewBox="0 0 76 76" className="block">
            <circle cx="38" cy="38" r={radius} fill="none" stroke="var(--primary)" strokeOpacity={0.25} strokeWidth="8" />
            <circle
              cx="38"
              cy="38"
              r={radius}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="8"
              strokeDasharray={`${dash} ${circumference}`}
              strokeLinecap="round"
              transform="rotate(-90 38 38)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm font-medium" aria-hidden="true">{clamped}%</span>
          </div>
        </div>
      </div>
    </section>
  )
}


