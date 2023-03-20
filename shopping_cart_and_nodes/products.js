// total changes (prices and quantity)
function pinSubtotal(){
   var pins = document.getElementById('pin').value;
   var pinPrice = document.getElementById('pinPrice').value;

   var subtotal = pins * pinPrice;

   document.getElementById("pinSubtotal").value= subtotal;
}

function charmSubtotal(){
   var charms = document.getElementById('charm').value;
   var charmPrice = document.getElementById('charmPrice').value;

   var subtotal = charms * charmPrice;

   document.getElementById("charmSubtotal").value = subtotal;
}

function cartTotal(){
   var pin = document.getElementById('pinSubtotal').value;
   var charms = document.getElementById('charmSubtotal').value;

   var shipping = document.getElementById('shipping');
   var cartTotal =  parseInt(pin) + parseInt(charms);

   if(shipping.checked){
      shipping = shipping.value;
      cartTotal = parseInt(pin) + parseInt(charms) + parseInt(shipping);
   }


   document.getElementById("cartTotal").value= cartTotal;
   
}

// EVENT LISTENER
var submissionForm = document.getElementById("submission");
submissionForm.addEventListener("click", validate);

// validate and print receipt
function validate(){
   var fName = document.getElementById("fname").value;
   var lName = document.getElementById("lname").value;
   var emailNote = document.getElementById("email").value;
   var phoneN = document.getElementById("phoneNumber").value;
   var cityValue = document.getElementById("city").value;
   var creditValue = document.getElementById("credit").value;

   // VALIDATE
   if(fName.length == 0){
      fName = "";
      alert("please enter your first name!");
      return;
    }
    if(lName.length == 0){
      lName = "";
      alert("please enter your last name!");
      return;
    }
   var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(!emailNote.match(validEmail) ){
      alert("this is not a valid email!");
      emailNote = "";
      return;
   }
   var validPhone = /^\d{10}$/;
   if(!phoneN.match(validPhone)){
      alert("this is not a valid phone number!");
      phoneN = "";
      return;
    }
    if(creditValue.length != 16){
      creditValue = "";
      alert("this is not a valid card number!");
      return;
    }
    var validZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if(!cityValue.match(validZip)){
      alert("this is not a valid zip code!");
      cityValue = "";
      return;
    }
    
   //  var validCredit = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/; 
   //  if(!creditValue.match(validCredit)){
   //    alert("this is not a valid card number!");
   //    creditValue = "";
   //    return;
   //  } 
   // DISABLED CREDIT VALIDATION because otherwise nothing would ever print since you need an actual credit number (mastercard)

    // PRINT
    document.getElementById("receiptTitle").innerHTML = "<br> <p>_____________________________________________</p> <h2>RECEIPT</h2>"
    var nameForm = document.getElementById("nameSubmit");
    nameForm.innerHTML += "<br>" + "name: " + fName + " " +  lName;
    document.getElementById("emailSubmit").innerHTML += "<br>" + "email: " + emailNote;
    document.getElementById("phoneNumberSubmit").innerHTML += "<br>" + "phone number: " + phoneN;
    document.getElementById("citySubmit").innerHTML += "<br>" + "zipcode: " + cityValue;
    document.getElementById("creditNumber").innerHTML += "<br>" + "card number: ";
    for(var i = 0; i < creditValue.length; i++){
      if(i < 12){
         document.getElementById("creditNumber").innerHTML += "X";
      }
      else{
         document.getElementById("creditNumber").innerHTML += creditValue[i];
      }
    }
    document.getElementById("userTotal").innerHTML += "<br> purchase total: $" + document.getElementById("cartTotal").value + "<br> <br> <h3 align='center'> thank you for shopping with us! </h3>";

    submissionForm.style.color="#403F4C";
    submissionForm.removeEventListener("click", validate);
}