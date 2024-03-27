let dinnerInvitees: string[] = ["Jane", "Ali", "Lee", "Sam", "Alina", "Elenor"];

// Print message to invite only two people for dinner
console.log(`Hi everyone, I can invite only two people for the dinner.`);

for (let i = dinnerInvitees.length; i > 0; i--) {
    
    if (dinnerInvitees.length !== 2) {
        // Print message to the people I can't invite for dinner
        let uninvitee = dinnerInvitees[i - 1];
        console.log(`Sorry ${uninvitee}, I can't invite you to dinner.`);
        // Removing those people from the list until the first 2 are left
        dinnerInvitees.pop();
    } else {
        let invitee = dinnerInvitees[i - 1];
        // Print message to the people who are still invited
        console.log(`Hi ${invitee}, you are still on my list.`);
    }
}

// Remove the remaining last two elements from the list
dinnerInvitees.splice(0, dinnerInvitees.length);
console.log(dinnerInvitees);    // Print the empty list