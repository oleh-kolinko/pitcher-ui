import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private url = 'http://localhost:3000';
  private socket;

  sendMessage(message: string, data: any): void {
    this.socket.emit(message, data);
  }

  getMessages(): Observable<Array<object>> {
    let observable = new Observable<Array<object>>(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
