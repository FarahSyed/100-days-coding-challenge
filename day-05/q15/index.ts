// From Q 14
let dinnerInvitees: string[] = ["Ali", "Charlotte", "Alina"];

dinnerInvitees.forEach(invitee => {
    console.log(`Hello ${invitee}, you are invited for dinner at our home today.`);
});


// Q 15
// The person who can't make it
let cantAttend = 'Charlotte';
console.log(`${cantAttend} can't make it to the dinner`);

// Replacing with new guest
let newInvitee = 'Sam';
dinnerInvitees[dinnerInvitees.indexOf(cantAttend)] = newInvitee;

// New Invitations
dinnerInvitees.forEach(invitee => {
    console.log(`Hello ${invitee}, you are invited for dinner at our home today.`);
});