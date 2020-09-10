function submitForm()
{
    var fullnameValue = document.forms['myForm']['fullname'].value;
    if(fullnameValue == '' || fullnameValue == undefined)
    {
        alert('Please enter valid full name');
        return false;
    }

    var addressline1value = document.forms['myForm']['adline1'].value;
    if(addressline1value == '' || addressline1value == undefined)
    {
        alert('Please enter Address line 1');
        return false;
    }

    var addressline2value = document.forms['myForm']['adline2'].value;
    if(addressline2value == '' || addressline2value == undefined)
    {
        alert('Please enter Address line 2');
        return false;
    }

    var city = document.forms['myForm']['city'].value;
    if(city == '' || city == undefined)
    {
        alert('Please enter City');
        return false;
    }

    var state = document.forms['myForm']['state'].value;
    if(state == '' || state == undefined)
    {
        alert('Please enter State');
        return false;
    }

    var postalcode = document.forms['myForm']['postalcode'].value;
    if(postalcode == '' || postalcode == undefined)
    {
        alert('Please enter Postal code');
        return false;
    }

    var country = document.forms['myForm']['country'].value;
    if(country == '' || country == undefined)
    {
        alert('Please enter Country');
        return false;
    }

    var email = document.forms['myForm']['email'].value;
    if(email == '' || email == undefined)
    {
        alert('Please enter Email id');
        return false;
    }

    var phone = document.forms['myForm']['phone'].value;
    if(phone == '' || phone == undefined)
    {
        alert('Please enter Phone');
        return false;
    }

    alert('Form Submitted Successfully');
    return true;
    
}
