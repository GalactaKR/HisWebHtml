var data =  {
    character: [{
        id: "001",
        name: "Bei Liu",
        nickName: "Xuande Liu",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio et sem sollicitudin convallis at tempus ante. Curabitur feugiat nisl nec rhoncus pharetra. Duis ac tristique lorem. Etiam tempus, leo a bibendum gravida, metus nunc efficitur ex, accumsan semper metus augue nec nisl. Etiam blandit venenatis imperdiet. Curabitur posuere diam diam. Quisque non varius mi. Pellentesque accumsan in nisi sed aliquet.",
        position: "Warlord",
        date: {
            birth: "2020.01.01",
            death: "2020.02.08"
        },
        kingdom: "Shu",
        event: ["001", "002", "003"],
        images: ["www..."]
    }],
    event: [{
        id: "001",
        name: "Huoshaochibi",
        date: "2020.02.01",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio et sem sollicitudin convallis at tempus ante. Curabitur feugiat nisl nec rhoncus pharetra. Duis ac tristique lorem. Etiam tempus, leo a bibendum gravida, metus nunc efficitur ex, accumsan semper metus augue nec nisl. Etiam blandit venenatis imperdiet. Curabitur posuere diam diam. Quisque non varius mi. Pellentesque accumsan in nisi sed aliquet.",
        kingdomInvolved: ["Wei", "Shu", "Wu"],
        characterInvolved: ["001"],
        images: ["www...", "www..."]
    }],
    popCulture: {
        games: [{
            id: "001",
            name: "shuibian",
            link: "www...",
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio et sem sollicitudin convallis at tempus ante. Curabitur feugiat nisl nec rhoncus pharetra. Duis ac tristique lorem. Etiam tempus, leo a bibendum gravida, metus nunc efficitur ex, accumsan semper metus augue nec nisl. Etiam blandit venenatis imperdiet. Curabitur posuere diam diam. Quisque non varius mi. Pellentesque accumsan in nisi sed aliquet.",
            image: "www..."
        }],
        media: [{
            id: "001",
            name: "shuibian",
            type: "movie",
            images: ["www..."],
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio et sem sollicitudin convallis at tempus ante. Curabitur feugiat nisl nec rhoncus pharetra. Duis ac tristique lorem. Etiam tempus, leo a bibendum gravida, metus nunc efficitur ex, accumsan semper metus augue nec nisl. Etiam blandit venenatis imperdiet. Curabitur posuere diam diam. Quisque non varius mi. Pellentesque accumsan in nisi sed aliquet.",
            movieStars: ["Bill"]
        }, {
            id: "001",
            name: "shuibian",
            type: "TV",
            episodes: "",
            images: ["www..."],
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio et sem sollicitudin convallis at tempus ante. Curabitur feugiat nisl nec rhoncus pharetra. Duis ac tristique lorem. Etiam tempus, leo a bibendum gravida, metus nunc efficitur ex, accumsan semper metus augue nec nisl. Etiam blandit venenatis imperdiet. Curabitur posuere diam diam. Quisque non varius mi. Pellentesque accumsan in nisi sed aliquet.",
            TvStars: ["Bill"]
        }], // movies and TV
        books: [{
            id: "001",
            name: "shuibian",
            author: "Bill",
            images: "www...",
            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a odio et sem sollicitudin convallis at tempus ante. Curabitur feugiat nisl nec rhoncus pharetra. Duis ac tristique lorem. Etiam tempus, leo a bibendum gravida, metus nunc efficitur ex, accumsan semper metus augue nec nisl. Etiam blandit venenatis imperdiet. Curabitur posuere diam diam. Quisque non varius mi. Pellentesque accumsan in nisi sed aliquet.",
        }]
    }
}

////// Home Page //////
//try
// nav
// carousol
// overall intro of three kingdom
// kingdom: 3 cards (one for each kingdom) => onclick = () => new page with to a more detailed intro to kingdom
//                                                           and a timeline of the events of his kingdom, and intro to 
//                                                           characters in his kingdom
// time line of critical events 
// popCulture: each of the popCulture (games, media, books) takes up a section, which is just a intro => onclic = () => to a new page with a display of all the games ...