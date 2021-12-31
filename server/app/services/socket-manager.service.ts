import * as http from "http";
import * as io from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Service } from "typedi";
import { SongInformation } from "app/classes/interfaces/song-information";

const Genius = require("genius-lyrics");
declare type Socket = io.Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap
>;
const Client = new Genius.Client(
  "mGTbWRxi8q0cJDoJecKIER1eOZd-uEJRV2APs3JlVZH-d3frC4JAc6-KgK-jxKyw"
);

@Service()
export class SocketManagerService {
  sio: io.Server;

  constructor() {}

  initSocket(server: http.Server): void {
    this.sio = new io.Server(server, {
      cors: { origin: "*", methods: ["GET", "POST"] },
    });
  }

  handleSockets(): void {
    this.sio.on("connection", (socket) => {
      console.log(socket.id);

      socket.on("getSongsSuggestions", (songInformation: string) => {
        this.getSongsSuggestions(songInformation, socket);
      });

      socket.on("getLyrics", (songInformation: string) => {
        this.getLyrics(songInformation, socket);
      });
    });
  }

  async getSongsSuggestions(songInformation: string, socket: Socket): Promise<void> {
    const searches = await Client.songs.search(songInformation);
    if (searches.length === 0) socket.emit("songSuggestionsNotFound");
    else {
      const songsInformation: SongInformation[] = [];
      for (const suggestedSong of searches) {
        songsInformation.push({
          songTitle: suggestedSong.title,
          artist: suggestedSong.artist.name,
          lyrics: "",
        });
      }
      socket.emit("foundSongsSuggestions", songsInformation);
    }
  }

  async getLyrics(songInformation: string, socket: Socket): Promise<void> {
    const searches = await Client.songs.search(songInformation);
    if (searches.length === 0) socket.emit("lyricsNotFound");
    else {
      const information: SongInformation = {
        songTitle: searches[0].title,
        artist: searches[0].artist.name,
        lyrics: await searches[0].lyrics(),
      };
      socket.emit("foundLyrics", information);
    }
  }
}
