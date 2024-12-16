import { Component, OnInit } from '@angular/core';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-edit-note',
  imports: [ToolBarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  editNoteForm: FormGroup;
  noteId!: string;
  isModificado:boolean = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private noteService: NotesService,
    private router: Router
  ) {
    this.editNoteForm = fb.group({
      title: ['', Validators.required],
      content: [''],
    });
    this.editNoteForm.valueChanges.subscribe(() => {
      this.isModificado = this.editNoteForm.dirty; // Se activa cuando hay cambios
    });
  }

  ngOnInit(): void {
    this.noteId = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (this.noteId) {
      const noteForEdit = this.noteService.selectNote(this.noteId)!;
      if (noteForEdit) {
        this.editNoteForm.get('title')?.setValue(noteForEdit.title);
        this.editNoteForm.get('content')?.setValue(noteForEdit.content);
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  onSubmit() {
    if (this.editNoteForm.valid) {
      this.noteService.editNote(this.noteId, this.editNoteForm.value);
      this.router.navigate(['/'])
    }
  }
}
