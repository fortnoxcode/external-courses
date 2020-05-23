function Sweets(name, weight) {
  this.name = name;
  this.weight = weight;
}

Sweets.prototype = {
  get getWeight() {
    return this.weight;
  },
  get getName() {
    return this.name;
  }
};

function Candy(name, weight, amount) {
  this.super.call(this, name, weight);
  this.amount = amount;
}
// одним способом
Candy.prototype = Object.create(Sweets.prototype);
Candy.prototype.constructor = Candy;
Candy.prototype.super = Sweets;

function Lollipop(name, weight, flavour) {
  this.super.call(this, name, weight);
  this.flavour = flavour;
}

Lollipop.prototype = Object.create(Sweets.prototype);
Lollipop.prototype.constructor = Lollipop;
Lollipop.prototype.super = Sweets;

function Choco(name, weight, isMilk = true) {
  this.name = name;
  this.weight = weight;
  this.isMilk = isMilk;
}

// вторым способом
Choco.prototype = new Sweets();

Choco.prototype.isItMilk = function() {
  if (this.isMilk) {
    console.log(`${this.name} is milky. Don't you love it?`);
  } else {
    console.log(`No, ${this.name} isn't milky`);
  }
};

function ChocolateBar(name, weight, isMilk = true) {
  Choco.call(this, name, weight);
}

ChocolateBar.prototype = Choco.prototype;

function GiftBox() {
  this.sweets = Array.from(arguments);
  this.totalWeight = this.sweets.reduce((acc, item) => acc + item.weight, 0);
}
GiftBox.prototype.sortBy = function(parameter) {
  if (parameter === 'weight') {
    this.sweets.sort((a, b) => a.weight - b.weight)
  }
  if (parameter === 'name') {
    this.sweets.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
  }
  return this.sweets;
}

GiftBox.prototype.findSweet = function(name) {
  return this.sweets.filter(item => item.name.toLowerCase() === name.toLowerCase());
}

const sweets = [
  new Candy('Korovka', 50, 20),
  new Lollipop('chupa-chups', 10, 'lemon'),
  new Choco('AlpenGold', 150, false),
  new ChocolateBar('Twix', 40)
];

const present = new GiftBox(...sweets);
