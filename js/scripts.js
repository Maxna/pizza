function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.pizzaOrder = function() {
  return this.toppings + this.size;
};

$(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    pizza1 = new Pizza($("input#pizza1").val());
    // pizza2 = new Pizza($("input#pizza1").val());

    var orderInfo = pizza1.name + ", your order of one" + pizza1.size + "pizza with" + pizza1.toppings + "will be: ";
        orderInfo += pizza1.pizzaOrder();
    var order = $('#order1');
    order.text = orderInfo;


  });
});
