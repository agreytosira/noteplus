export const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}

export const generateSlug = (kalimat) => {
  const cleanedString = kalimat.replace(/[^a-zA-Z0-9 ]/g, '')
  const slug = cleanedString.toLowerCase().replace(/\s+/g, '-')
  const uniqueSlug = `${slug}-${Date.now()}`

  return uniqueSlug
}
