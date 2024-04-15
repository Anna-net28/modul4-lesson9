'use strict'

const cart ={
items : [],
totalPrice : 0,
count : 0,

get totalPrice() {
  return this.calculateItemPrice();
},

add(name, price, amount = 1) {
  const goods = {
    name,
    price,
    amount
  }
  this.items.push(goods);
  this.increaseCount(amount);
},

increaseCount(num) {
  this.count += num;
},

calculateItemPrice() {
  this.items.reduce((sum, item) => {
    return sum += item.price * item.amount;
  }, 0);
},

clear() {
  this.count = 0;
  this.items = [];
},

print() {
  console.log(JSON.stringify(cart.items));
  console.log(`TotalPrice: ${this.totalPrice}`); 
},

};
cart.add('ябоки', 15, 120);
cart.add('груши', 10, 260);
cart.add('бананы', 15, 125); 

cart.print();









//и методы
//getTotalPrice - получить общую стоимость товаров
//add - добавить товар
//increaseCount - увеличить количество товаров
//calculateItemPrice - посчитать общую стоимость товаров
//clear - очистить корзину
//Далее описание каждого метода
//print - распечатать корзину


//getTotalPrice()

//метод возвращает значение свойства totalPrice

//calculateItemPrice()

//пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice 

//increaseCount()

//Принимает один параметр(число)
//Увеличивает свойство count на это число

//add()

//Принимает три параметра:

//название товара
//цену товара
//количество товара (опциональный параметр, по умолчанию 1 товар)
//этот метод формирует объект из полученных параметров и добавляет его в свойство items

//так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

//clear()

//Очищает полностью нашу корзину, возвращает все значения в изначальные

//print()

//Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

//Для проверки работы функционала добавить 3 или более товаров в корзину

//После вызвать метод print для вывода информации в консоль