import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps extends React.ComponentProps<typeof Card> {
  title: string
  value: string | number
  change?: string
  icon?: React.ReactNode
}

export function StatCard({
  title,
  value,
  change,
  icon,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card className={cn("border-none overflow-hidden", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon && (
          <div className="text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">
          {value}
        </div>

        {change && (
          <p className="text-xs text-muted-foreground mt-1">
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  )
}