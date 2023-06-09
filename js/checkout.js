document.querySelector('#buy-now-btn').addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default form submission
  
    // validate the form
    const isFormValid = validateForm();
  
    // display the success message if the form is valid
    if (isFormValid) {
      setTimeout(function() {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your order has been placed, you will receive a receipt over the email',
          confirmButtonText: 'OK'
        });
      }, 2000);
    }
  });
  
  // Function to validate the form
  function validateForm() {
    const form = document.querySelector('#shipping-form');
    const requiredFields = form.querySelectorAll('[required]');
  
    let isFormValid = true;
    requiredFields.forEach(function(field) {
      if (!field.value) {
        isFormValid = false;
      }
    });
  
    return isFormValid;
  }
