// From Q 14
var dinnerInvitees = ["Ali", "Charlotte", "Alina"];
dinnerInvitees.forEach(function (invitee) {
    console.log("Hello ".concat(invitee, ", you are invited for dinner at our home today."));
});
// Q 15
// The person who can't make it
var cantAttend = 'Charlotte';
console.log("".concat(cantAttend, " can't make it to the dinner"));
// Replacing with new guest
var newInvitee = 'Sam';
dinnerInvitees[dinnerInvitees.indexOf(cantAttend)] = newInvitee;
// New Invitations
dinnerInvitees.forEach(function (invitee) {
    console.log("Hello ".concat(invitee, ", you are invited for dinner at our home today."));
});
