/**
 *
 * @param {string} email
 * @returns {boolean}
 */
export const isEmailInValidFormat = (email: string) => {
  const emailFilter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  return emailFilter.test(email)
}
