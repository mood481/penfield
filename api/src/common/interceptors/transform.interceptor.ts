import { ExecutionContext, Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor
{
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> {
        return next
            .handle()
            .pipe(map(data => ({ data })));
    }
}
