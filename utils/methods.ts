/**
 *
 * @param {string} email
 * @returns {boolean}
 */
export const isEmailInValidFormat = (email: string) => {
  const emailFilter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  return emailFilter.test(email)
}

/**
 *
 * @param {number} expTime
 * @returns {boolean}
 */
export const hasTokenExpired = (expTime: number) => {
  if (Number.isNaN(expTime)) {
    return true
  }
  return Math.floor((Date.now() - expTime) / 1000) > 0
}
