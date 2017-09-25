function Contact(first, last, telephone) {
  this.firstName = first;
  this.lastName = last;
  this.telephone = telephone;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedTelephone = $("input#new-telephone").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedTelephone);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
     $(".telephone").text(newContact.telephone);
    });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-telephone").val("");

  });
});
