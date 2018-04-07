function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.pizzaOrder = function() {
  var price = "";

  this.topping + this.size;

  return price;
};

$(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function(){
      var userToppings = $(this).val();
    });
    var userSizes = $("input:radio[name=size]:checked").val();

debugger;
    pizza1 = new Pizza (userToppings, userSizes);

    var orderInfo = "Your order will be: $";
        orderInfo += pizza1.pizzaOrder();
    var order = $('#orderConfirm');
    $("#orderConfirm").text = orderInfo;
    $("#orderConfirm").show();
  });
});
