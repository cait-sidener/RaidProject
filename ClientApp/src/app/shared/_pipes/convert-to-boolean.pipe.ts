import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToBoolean'
})
export class ConvertToBoolean implements PipeTransform {
    transform(value: any, characterTrue: string): boolean {
        return value == characterTrue ? true : false;
    }
}
