import { Injectable } from '@angular/core';
import { E_PermittedAction } from '@enumeration/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  assignedPermissions: string[] = [
    E_PermittedAction.INCREMENT,
    E_PermittedAction.RESET
  ];

  constructor() {
    console.log("Assigned Permissions");
    console.log(this.assignedPermissions);
  }

  hasPermission(permission: E_PermittedAction) {
    console.log("Permission: ");
    console.log(permission);
    if (this.assignedPermissions.some(p => p === permission)) {
      return true;
    }

    return false;
  }
}
