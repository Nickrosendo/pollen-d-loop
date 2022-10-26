var emailRegex = /\S+@\S+\.\S+/;

function validateEmail(email) {
  return emailRegex.test(email)
}

function showErrorMessage() {
  document.getElementById("subscribe-error").style = "display: block;";
}
function hideErrorMessage() {
  document.getElementById("subscribe-error").style = "";
}

function hideSubscriptionInput() {
  document.getElementById("pending-subscription").style = "display: none;";
}

function showSuccessMessage() {
  document.getElementById("subscribe-success").style = "display: block;";
}

function handleSubscribe() {
  var email = document.getElementById("email-subscribe-input").value;
  var emailValidation = validateEmail(email);
  if(email && emailValidation) {
    submitSubscription(email);
    hideErrorMessage();
  } else {
    showErrorMessage();
  } 

} 

function submitSubscription(email) {
  var u = 'd6f8dde6eb86890cb804ee0e7';
  var id = 'a46369097d';
  var url = 'https://pollen.us1.list-manage.com/subscribe/post-json?u=' + u + '&id=' + id + '&EMAIL=' + encodeURIComponent(email) + '&c=__jp0';
  fetch(url, { mode: 'no-cors' })
    .then(function(response) { return response.json() })
    .then(function(data) { 
      hideSubscriptionInput();
      showSuccessMessage();
    })
    .catch(function(err) {
      showErrorMessage();
    })
}
