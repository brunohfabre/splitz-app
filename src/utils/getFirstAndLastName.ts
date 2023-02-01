export function getFirstAndLastName(name: string) {
  const splittedName = name.split(' ')

  let shortName = ''

  shortName = splittedName[0]

  if (splittedName.length > 1) {
    shortName = `${shortName} ${splittedName[splittedName.length - 1]}`
  }

  return shortName
}
