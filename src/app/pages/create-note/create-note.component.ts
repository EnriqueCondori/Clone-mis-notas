import { Component } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-note',
  imports: [ToolBarComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css',
})
export class CreateNoteComponent {
  noteCreated: Partial<Note> = {
    title: '',
    content: '',
    color:'',
  };

  constructor(private noteService: NotesService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.noteService.createNote(this.noteCreated);
      this.router.navigate(['/']);
    }
  }

  colors=[
    '#7ac8e9',
    'secondary',
    'accent',
    '#b6e346',
    '#FF5733',
    '#f57cef',
  ]
  onColorSelected(color: string): void {
    console.log('Color selected:', color);
    this.noteCreated.color = color; 
  console.log('Estado actual de la nota:',JSON.stringify( this.noteCreated));
  }
  
}
