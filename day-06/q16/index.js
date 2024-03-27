var dinnerInvitees = ["Ali", "Sam", "Alina"];
// Informing statement
console.log("Hey Everyone, I found a bigger dinner table");
// Inviting more guests
dinnerInvitees.unshift("Jane");
dinnerInvitees.splice(dinnerInvitees.length / 2, 0, "Lee");
dinnerInvitees.push("Elenor");
// New Invitations
dinnerInvitees.forEach(function (invitee) {
    console.log("Hello ".concat(invitee, ", you are invited for dinner at our home today."));
});
