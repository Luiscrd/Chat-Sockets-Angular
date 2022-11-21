import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(

    public wsService: WebsocketService

  ) { }

  sendMessage(msg: string) {

    const payload = {
      to: 'Luis Carballo',
      msg
    }

    this.wsService.emit('message', payload);

  }
}
