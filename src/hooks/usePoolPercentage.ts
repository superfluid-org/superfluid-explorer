import Decimal from 'decimal.js'
import { useMemo } from 'react'

export const usePoolPercentage = (
  totalUnits: Decimal | string,
  individualUnits: Decimal | string
) => {
  return useMemo(() => {
    const percentageDecimal = calculatePoolPercentage(
      typeof totalUnits === 'string' ? new Decimal(totalUnits) : totalUnits,
      typeof individualUnits === 'string'
        ? new Decimal(individualUnits)
        : individualUnits
    )
    return {
      percentageDecimal,
      percentageString: percentageDecimal.toDP(2).toString() + '%'
    }
  }, [totalUnits.toString(), individualUnits.toString()])
}

export const calculatePoolPercentage = (
  totalUnits: Decimal,
  individualUnits: Decimal
): Decimal => {
  if (totalUnits.isZero() || individualUnits.isZero()) {
    return new Decimal(0)
  }
  return individualUnits.div(totalUnits).mul(100)
}
