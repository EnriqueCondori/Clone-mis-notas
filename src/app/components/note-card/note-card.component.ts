import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  @Input() note!: Note;

  ngOninit() {
    console.log('Color recibido',this.note.color);
    console.log('Nota recibida', this.note);
  }



  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  cardHeight = '290px';
  cardWidth = '380px';

  onDelete(noteId: string): void {
    this.deleteEvent.emit(noteId);
  }
}
