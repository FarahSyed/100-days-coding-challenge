// Function that accepts two parameters and an optional parameter
function make_album(artistName: string = "Dummy Artist", albumTitle: string = "Dummy Title", numOfTracks?: number) {
    // Create an object
    const albumObj = {
        name: artistName,
        title: albumTitle,
    };
    if (numOfTracks) albumObj["tracks"] = numOfTracks;
    return albumObj;  // Return the object
}

// Multiple function invocation representing different albums
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2"));
console.log(make_album("Artist 3", "Album 3"));
console.log(make_album("Artist 4", "Album 4", 4));    // Function call with number of tracks