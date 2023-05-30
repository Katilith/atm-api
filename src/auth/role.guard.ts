import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRole = this.reflector.get<string>('role', context.getHandler());
        const userRoles: string[] = context.getArgs()[0].user['https://atm-project.dev/roles'] ?? null;

        if (!requiredRole) {
            return true;
        }

        if (userRoles.includes(requiredRole)) {
            return true;
        }

        throw new ForbiddenException(`User does not have the required role ${requiredRole}!`);
    }

}