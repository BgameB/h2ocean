import React from 'react'
import clsx from "clsx";

import { Progress } from "@/ui/design-system/achievementsDesign/AchievementsProgress"
import { Badge } from "@/ui/design-system/achievementsDesign/AchievementsBadge"
import { type LucideIcon } from 'lucide-react'

interface AchievementProps {
  className?: string
  icon: LucideIcon
  title: string
  description: string
  progress: number
  color: string
}

export default function Achievement({ icon: Icon, title, description, progress, color, className }: AchievementProps) {
  return (
    <div className={clsx("flex items-center gap-[20px]", className)}>
      <div className="flex-shrink-0 ">
        <Badge variant="secondary" className="w-12 h-12 rounded-full p-3">
          <Icon className="w-full h-full" />
        </Badge>
      </div>
      <div className="flex-grow mb-8">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
        <Progress value={progress} color={color} className="mt-2" />
      </div>
      <div className="flex mt-5 text-lg font-medium">
        {progress}%
      </div>
    </div>
  )
}

