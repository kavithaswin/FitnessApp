import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingConfirmation } from './stop-training-confirmation';



@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress =0;
  timer:number;
  @Output() trainingExit = new EventEmitter<void>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   this.startTimerResume();
  }

  startTimerResume(){
    this.timer = setInterval(()=>{
      this.progress = this.progress+5;
      if(this.progress>=100)
      {
        clearInterval(this.timer);
      }
    },1000);
  }
  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingConfirmation,{
      data:{
        progress:this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result)
      this.trainingExit.emit();
      else
      this.startTimerResume();
    })
  }

}
