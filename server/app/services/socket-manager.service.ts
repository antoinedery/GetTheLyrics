import * as http from "http";
import * as io from "socket.io";
import { Service } from "typedi";

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
    });

    //   socket.on("getDictionaryForClient", (title: string) => {
    //     this.dictionaryManagerService.sendDictionaryToClient(title, socket);
    //   });
  }
}
