import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string>
{
    constructor(private isEmptyValid = false) { }

    public async transform(value: string, metadata: ArgumentMetadata) {
        const val = parseInt(value, 10);
        console.log('parse id', value, val, isNaN(val));
        if ((!value && this.isEmptyValid) || !isNaN(val)) {
            return val;
        } else {
            throw new BadRequestException('ID should be a number');
        }
    }
}
