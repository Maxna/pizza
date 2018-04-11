function Pizza(size) {
  this.topping = [];
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.pizzaOrder = function() {
  for (var i = 0; i < pizza1.topping.length; i++) {
    this.cost = this.size += this.topping;
  }
  return this.cost;
};

$(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    pizza1 = new Pizza();
    // var userToppings = parseInt($("input:checkbox[name=topping]:checked").val());
    $("input:checkbox[name=topping]:checked").each(function(){
      pizza1.topping.push($(this).val());
    });
    var userSizes = parseInt($("input:radio[name=size]:checked").val());
debugger;
    console.log(pizza1);
    var orderInfo = "Your order will be: $";
        orderInfo += pizza1.pizzaOrder();
    var order = $('#orderConfirm');
    $("#orderConfirm").text(orderInfo);
    $("#orderConfirm").show();
  });
});
