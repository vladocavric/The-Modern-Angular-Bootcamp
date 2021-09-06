import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {scan} from "rxjs/operators";

export interface  Command {
  id: number,
  type: 'success' | 'error' | 'clear',
  message?: string
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messageInput: Subject<Command>
  messageOutput: Observable<Command[]>

  constructor() {
    this.messageInput = new Subject<Command>()
    this.messageOutput = this.messageInput.pipe(
      scan((acc: Command[], value: Command) => {
        if(value.type === 'clear') {
          return acc.filter(message => message.id !== value.id)
        } else {
          return [...acc, value]
        }
      }, [])
    )
  }



  successMessage(message: string) {
    const id = this.randomId()
    this.messageInput.next({
      id,
      type: 'success',
      message: message
    })

    setTimeout(() => {
      this.closeMessage(id)
    }, 60000)
  }


  errorMessage(message: string) {
    const id = this.randomId()
    this.messageInput.next({
      id,
      type: 'error',
      message: message
    })

    setTimeout(() => {
      this.closeMessage(id)
    }, 60000)
  }

  closeMessage(id: number) {
    this.messageInput.next({
      id: id,
      type: 'clear',
    })
  }

  private randomId() {
    return Math.round(Math.random() * 10000)
  }
}
