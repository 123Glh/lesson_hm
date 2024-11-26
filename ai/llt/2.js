//代码可读性 
function generateRandomGender() {
  // return Math.random()>0.5 ? 'male':'fmale'
  const genders = ['male', 'fmale']
  return genders[Math.floor(Math.random * genders.length)]
}