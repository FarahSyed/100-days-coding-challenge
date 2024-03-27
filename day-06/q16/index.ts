let dinnerInvitees: string[] = ["Ali", "Sam", "Alina"];

// Informing statement
console.log("Hey Everyone, I found a bigger dinner table");

// Inviting more guests
dinnerInvitees.unshift("Jane");
dinnerInvitees.splice(dinnerInvitees.length / 2, 0, "Lee");
dinnerInvitees.push("Elenor");

// New Invitations
dinnerInvitees.forEach(invitee => {
    console.log(`Hello ${invitee}, you are invited for dinner at our home today.`);
});