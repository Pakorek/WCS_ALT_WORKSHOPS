type User = {
  name: string;
  age: number;
};

type User0 = {
  name: string,
  birthday: string
}

const calcAge = (user: User0): User => {
  const birthDate = new Date(user.birthday)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const month = today.getMonth()
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return { name: user.name, age: age }
}

const prettyPrintWilder = (users: User[]) => {
  console.log('########################')
  users.forEach((el): void => {
    console.log(`${el.name} is ${el.age} years old`)
  })
  console.log('########################')
}

const wilders: User[] = []
const user1: User = { name: 'Pierre', age: 23 }
const user2: User = calcAge({ name: 'Paul', birthday: '10/02/1990' })
const user3: User = { name: 'Jacques', age: 25 }
wilders.push(user1)
wilders.push(user2)
wilders.push(user3)
prettyPrintWilder(wilders)
