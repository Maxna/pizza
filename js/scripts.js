function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.pizzaOrder = function() {

    return this.topping + this.size;

};

$(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    // var userToppings = parseInt($("input:checkbox[name=topping]:checked").val());
    $("input:checkbox[name=topping]:checked").each(function(){
      var userToppings = parseInt($(this).val());
    });

    var userSizes = parseInt($("input:radio[name=size]:checked").val());

debugger;
    pizza1 = new Pizza (userToppings, userSizes);

    var orderInfo = "Your order will be: $";
        orderInfo += pizza1.pizzaOrder();
    var order = $('#orderConfirm');
    $("#orderConfirm").text(orderInfo);
    $("#orderConfirm").show();
  });
});
