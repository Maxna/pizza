size = {
  small: 6,
  medium: 8,
  large: 10
};

toppings = {
  cheese: 1,
  pepperoni: 1,
  olives: 1,
  sausage: 1,
  mushroom: 1
};

function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
  this.pizzaOrder = function() {
    return this.toppings + this.size;
  };
};






$(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    pizza1 = new Pizza($("input#pizza1").val());
    // pizza2 = new Pizza($("input#pizza1").val());


  });
});
