import { Component, OnInit } from '@angular/core';
import { E_PermittedAction } from '@enumeration/api-interfaces';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'enumeration-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count = 0;

  canIncrement = false;
  canDecrement = false;
  canReset = false;

  constructor(private readonly permissionService: PermissionService) { }

  ngOnInit(): void {
    this._checkPermissions();
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  private _checkPermissions() {
    this.canIncrement = this.permissionService.hasPermission(E_PermittedAction.INCREMENT);
    this.canDecrement = this.permissionService.hasPermission(E_PermittedAction.DECREMENT);
    this.canReset = this.permissionService.hasPermission(E_PermittedAction.RESET);
  }
}
