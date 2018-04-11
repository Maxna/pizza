function Pizza(size) {
  this.topping = [];
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.pizzaOrder = function() {
  for (var i = 0; i < pizza.topping.length; i++) {
    this.cost = this.size += this.topping;
  }
};

$(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    // var userToppings = parseInt($("input:checkbox[name=topping]:checked").val());
    $("input:checkbox[name=topping]:checked").each(function(){
      userToppings.push($(this).val());
    });
    console.log(userToppings)
    var userSizes = parseInt($("input:radio[name=size]:checked").val());


    pizza1 = new Pizza (userToppings, userSizes);

    var orderInfo = "Your order will be: $";
        orderInfo += pizza1.pizzaOrder();
    var order = $('#orderConfirm');
    $("#orderConfirm").text(orderInfo);
    $("#orderConfirm").show();
  });
});
