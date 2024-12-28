document.addEventListener('DOMContentLoaded', function() {
    const songName = "Anurag Saikia";
    const youtubeLink = "https://youtu.be/BcSejVIxB0E?si=HukwTuQgacF62PTe";
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
