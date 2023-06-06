
function getRandomProperty(object) {
  const properties = Object.keys(object);
  const randomPropertyIndex = Math.floor(Math.random() * properties.length);
  const randomProperty = properties[randomPropertyIndex];
  return object[randomProperty]
}

const names = ['Carlos'];

function createUserEmail(user) {
  const name = user.name.toLowerCase();
  const surname = user.surname.toLowerCase().replaceAll(' ', '');
  const email = `${name}${surname}@ironhack.es`;
  return email;
}

const user = {
  name: 'Carlos',
  surname: 'del Prado Mota',
  age: 33,
  address: {
    street: 'C/ Falsa 123',
    zipcode: '22222',
    city: 'Madrid'
  }
}

user.name = 'Julio';
user.email = createUserEmail(user);

console.log(`User name is: ${user.name}`);
console.log(`User street is: ${user.address.street}`);
console.log(`User email: ${user.email}`);
console.log(`Random property: ${getRandomProperty(user)}`);
console.log(`User as string: ${JSON.stringify(user)}`);

const message = {
  from: {
    name: 'Maria',
    phoneNumber: '666666666'
  },
  to: {
    name: 'Paco',
    phoneNumber: '666666667'
  },
  text: 'Hooliiiii',
  creationDate: '2023-04-18T00:01:01',
  received: true,
  attachments: [
    "https://files/photo.png",
    "https://files/sound.mp4",
  ]
}

console.log(user);
console.log(message);


const users = [
  {
    name: 'Carlos',
    age: 33
  },
  {
    name: 'Ana',
    age: 37
  },
  {
    name: 'Julio',
    age: 30
  }
]

users.push({ name: 'Paco', age: 41 });


function getLongestName(users) {
  let longestUserName;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!longestUserName || user.name.length > longestUserName.name.length) {
      longestUserName = user;
    }
  }
  return longestUserName;
}

console.log('Longest user name:', getLongestName(users))