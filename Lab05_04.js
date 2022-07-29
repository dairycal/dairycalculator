//declaring variables

var quantity = 1;
var discount = document.querySelector('.discount_amt');
const addition = document.querySelector('.addsymbol');
const subtraction = document.querySelector('.subsymbol');
const quantityNumber = document.querySelector('.quantity_number');
//function that gets called on click on either of the symbols
document.querySelector('.final_amount').textContent = 'Rs. 135';
const total = function () {
document.querySelector('.quantity_number').textContent = quantity;
var x = 135 * quantity - document.querySelector('.discount_amt').value;
  if (x >= 0) {
document.querySelector('.final_amount').textContent = "Rs. " + x;
document.querySelector('.final_amount').style.color = 'black';
} else {
document.querySelector('.final_amount').style.color = 'red';

document.querySelector('.final_amount').textContent = 'Error';
}
};

//event handling
addition.addEventListener('click', function () {
quantity++;
total();
});
subtraction.addEventListener('click', function () {
quantity--;
total();
});

document.querySelector('.quantity_number').textContent = quantity;