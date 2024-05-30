
function main(){
document.addEventListener('DOMContentLoaded', () => {
    fetch('music.json')
      .then(response => response.json())
      .then(data => displayAlbums(data))
      .catch(error => console.error('Error loading JSON:', error));
  });
  
  function displayAlbums(data) {
    const container = document.getElementById('albums-container');
    const template = document.getElementById('album-template').content;
    const defaultCoverUrl = 'https://fastly.picsum.photos/id/880/200/200.jpg?hmac=g5VV-eqqKk9TdTvkzKu6PzjRtzrqVhrj6v7H9ZT7PDo';
  
    data.genres.forEach(genre => {
      const genreSection = document.createElement('section');
      const genreHeader = document.createElement('h2');
      const Albums = document.createElement('div');
      Albums.classList.add('albums');
      genreHeader.textContent = genre.genre;
      genreSection.appendChild(genreHeader);
      genreSection.appendChild(Albums);
  
      genre.albums.forEach(album => {
        const clone = document.importNode(template, true);
        const img = clone.querySelector('img');
        const title = clone.querySelector('h3');
        const artist = clone.querySelector('p');
  
        img.src = album.cover_url || defaultCoverUrl;
        img.alt = `${album.title} cover`;
        img.onerror = () => img.src = defaultCoverUrl; // Si l'image ne se charge pas, utiliser l'image par défaut
        title.textContent = album.title;
        artist.textContent = album.artist;
        Albums.appendChild(clone);
      });
      container.appendChild(genreSection);

    });
  }
}
main();
  