import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {
	transform(value?: string | null, ...args: any[]): string {
		if (!value) return '';

		let reverse = ''

		for (let i = value.length - 1; i >= 0; i --) {
			reverse += value[i];
		}	
		
		return reverse;
	}
}

