import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Array<any>
  posData!: Note;
  noteData!: Note;
  isOpen : boolean | any

  constructor(private task: TaskService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getAll();
}

openModal(){
  this.isOpen = true;
}

  getAll() {
    this.task.getData().subscribe((data) => {
      this.data = data;
    })
  }

  createNote(title: string, detail: string){
    this.posData = new Note();
    this.posData.title = title;
    this.posData.detail = detail;
    this.task.postNote(this.posData).subscribe((data) => {
      this.data.push(data);
    });
  }

  selectNote(id: any){
    this.task.getNoteData(id).subscribe((res: Note) => {
      this.noteData = res;
    });
  }

  //not working
  // editNote(id: any, title: string, detail: string){
  //   this.noteData.title = title;
  //   this.noteData.detail = detail;
  //   this.task.patchNote(this.noteData,id).subscribe((res:EditNote)=>{
  //     this.data.splice(id - 1, 1, res);
  //   });
  // }

  // removeNote(id: any){
  //   this.selectNote(id);
  //   this.task.deleteNote(id).subscribe(() => {
  //     this.data.splice(id - 1, 1);
  //   });
  // }
}


export class Note{
  id!: number;
  title!: string;
  detail!: string;
}

export class NewNote implements Note{
  id!: number;
  title!: string;
  detail!: string;
}

export class EditNote implements Note{
  id!: number;
  title!: string;
  detail!: string;
}