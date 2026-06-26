// formatKES(price) — converts a number to Kenyan Shilling string
// Example: formatKES(799) → "KSh 102,472"
// We multiply by 128 (approx USD→KES rate)

const USD_TO_KES = 128

export function formatKES(usdPrice) {
  const kesPrice = Math.round(usdPrice * USD_TO_KES)
  return `KSh ${kesPrice.toLocaleString('en-KE')}`
}

// If your prices are already in KES, use this instead:
// export function formatKES(kesPrice) {
//   return `KSh ${kesPrice.toLocaleString('en-KE')}`
// }