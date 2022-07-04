var faker = require('faker');

var database = { products: []};
var count=0;
for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    // imageUrl:faker.image.abstract(width = 640, height = 480, randomize = true),
    imageUrl:`https://source.unsplash.com/random/?product&${count++}`,
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));