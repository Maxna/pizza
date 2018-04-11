//back end logic
function Pizza(size) { //Pizza constructor
  this.topping = [];
  this.size = size;
  this.cost = 0;
}
//add toppings to pizza value
Pizza.prototype.pizzaOrder = function() {
  this.cost = 0;
  for (var i = 1; i <= pizza1.topping.length; i++) {
    this.cost = (this.size += 1);
  }
  return this.cost;
};
//front end logic
$(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    pizza1 = new Pizza();
    pizza1.size = parseInt($("input:radio[name=size]:checked").val());
    $("input:checkbox[name=topping]:checked").each(function(){
      pizza1.topping.push($(this).val());
    });
    //Display pizza pricing
    var orderInfo = "Your order will be: $";
        orderInfo += pizza1.pizzaOrder();
    var order = $('#orderConfirm');
    $("#orderConfirm").text(orderInfo);
    $("#orderConfirm").show();
  });
});
