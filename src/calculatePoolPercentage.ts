import Decimal from 'decimal.js'

const calculatePoolPercentage = (
  totalUnits: Decimal,
  individualUnits: Decimal
): Decimal => {
  if (totalUnits.isZero() || individualUnits.isZero()) {
    return new Decimal(0)
  }

  return individualUnits.div(totalUnits).mul(100)
}

export default calculatePoolPercentage
