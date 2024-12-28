document.addEventListener('DOMContentLoaded', function() {
    const songName = "Bohemian Rhapsody";
    const youtubeLink = "https://www.youtube.com/watch?v=3JZ4pnNtyxQ";
    const contentDiv = document.createElement('div');
    const songParagraph = document.createElement('p');
    const songAnchor = document.createElement('a');

    songAnchor.href = youtubeLink;
    songAnchor.textContent = songName;
    songAnchor.target = "_blank";

    songParagraph.textContent = "My current favourite song is ";
    songParagraph.appendChild(songAnchor);
    contentDiv.appendChild(songParagraph);

    document.body.appendChild(contentDiv);
});
