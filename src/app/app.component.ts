import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})


export class AppComponent implements OnInit{
  constructor(private noteService: NotesService) {
  }
  
  ngOnInit(): void {
    this.noteService.loadNotes();
  }
}
