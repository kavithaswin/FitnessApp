import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title>Are you Sure? </h1>
    <mat-dialog-content>
        <p>You have completed {{data.progress}}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>   
        <button mat-button [mat-dialog-close]="false">NO</button>   
    </mat-dialog-actions>
    `,
    styleUrls: ['./current-training.component.css']
  })
export class StopTrainingConfirmation{
    constructor(@Inject(MAT_DIALOG_DATA) public data:any){


    }

}