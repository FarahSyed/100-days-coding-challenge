// Function that takes user language and returns a global demand in their language
function globalDemand(language: string): string {
    
    // Declare a string variable
    let message: string;
    
    // Check the user's language and initialize the message in their language; otherwise, initialize it in english
    switch(language.toLowerCase()) {
        default:
            message = "From the river to the sea, Palestine will be free. Free Palestine!";
            break;   // Remember to end default with a break if it is not the last case
        case "polish":
            message = "Wolna Palestyna";
            break;
        case "french":
            message = "La Palestine libre";
            break;
        case "afrikaans":
            message = "Vryheid Vir Palestyn nou!";
            break;
        case "latin":
            message = "Palaestina Libera";
            break;
        case "swedish":
            message = "befria Palestina";
            break;
        case "russian":
            message = "Бесплатный Палестины";
            break;
        case "serbian":
            message = "Слободна Палестина";
            break;
        case "portugese":
            message = "Palestina livre";
            break;
        case "spanish":
            message = "Palestina Libre!";
            break;
    }
    return message; // Return the message
}
            
console.log(globalDemand("English"));
console.log(globalDemand("Russian"));