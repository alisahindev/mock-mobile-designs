import React from 'react'

type TaskRowProps = {
  title: string
  tasksText: string
  icon?: React.ReactNode
  iconBackground: string
  progressPercent: number
}

export default function TaskRow({ title, tasksText, icon, iconBackground, progressPercent }: TaskRowProps) {
  const clamped = Math.max(0, Math.min(100, progressPercent))
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const dash = (clamped / 100) * circumference

  return (
    <div className="bg-white rounded-[15px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.04)] px-4 py-3 flex items-center justify-between" role="listitem">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center" style={{ backgroundColor: iconBackground }} aria-hidden="true">
          <span className="text-foreground" aria-hidden="true">{icon}</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-foreground truncate">{title}</p>
          <p className="text-xs text-muted-foreground">{tasksText}</p>
        </div>
      </div>
      <div className="relative w-[42px] h-[42px]" aria-label={`${clamped}% tamamlandı`} role="img">
        <svg width="42" height="42" viewBox="0 0 42 42" className="block">
          <circle cx="21" cy="21" r={radius} fill="none" stroke="var(--border)" strokeWidth="6" />
          <circle
            cx="21"
            cy="21"
            r={radius}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="6"
            strokeDasharray={`${dash} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(-90 21 21)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-foreground" aria-hidden="true">{clamped}%</span>
        </div>
      </div>
    </div>
  )
}


