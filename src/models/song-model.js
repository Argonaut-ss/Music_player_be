import generateID from "../utils/generatorID.js";

class SongModel {
  static songs = [
    {
      title: "Rayuan Perempuan Gila",
      artists: ["Nadin Amizah"],
      genres: ["Indonesian Pop"],
      playedCount: 20,
    },
    {
      title: "Lagu Bagus 2",
      artists: ["Nadin Amizah"],
      genres: ["Indonesian Pop"],
      playedCount: 10,
    },
    {
      title: "Lagu Bagus",
      artists: ["Samy"],
      genres: ["Indonesian Pop"],
      playedCount: 30,
    },
  ];

  constructor(songID, title, artists, playedCount) {
    this.songID = songID;
    this.title = title;
    this.artists = artists;
    this.playedCount = playedCount;
  }

  static getSongs() {
    return [...this.songs];
  }

  static addSong(title, artists, playedCount) {
    const songID = generateID();
    const newSong = new SongModel(songID, title, artists, playedCount);
    this.songs.push(newSong);

    return newSong;
  }

  // static removeSong(title){
  //   const index = this.songs.findIndex(song => song.title === title);

  // }
}

export default SongModel;
