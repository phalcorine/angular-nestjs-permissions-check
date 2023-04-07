import { Injectable } from '@nestjs/common';
import { E_PermittedAction, Message } from '@enumeration/api-interfaces';

@Injectable()
export class AppService {
  assignedPermissions = [
    E_PermittedAction.INCREMENT,
    E_PermittedAction.RESET,
  ];

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getPermissions(): string[] {
    return this.assignedPermissions;
  }
}
