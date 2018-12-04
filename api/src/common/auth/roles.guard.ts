import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate
{
    constructor(private readonly reflector: Reflector) {

    }

    public canActivate(context: ExecutionContext): boolean {
        let granted = false;
        const roleLevels = this.reflector.get<Array<number>>('roles', parent);
        if (!roleLevels) {
            granted = true;
        } else {
            const req = context.switchToHttp().getRequest();
            const user = req.user;
            const hasRole = () => user && roleLevels.indexOf(user.role.level) > -1;

            granted = hasRole();
        }
        console.log('Granted?', granted, roleLevels);

        return granted;
    }
}
