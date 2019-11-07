import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

export interface Alert {
  message: string;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/contactlist']);
  }
}
