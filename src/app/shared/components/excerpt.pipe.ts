import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt',
})
export class ExcerptPipe implements PipeTransform {

  public transform(value: string | undefined, limit: number = 160): string {
    if (!value) {
      return "";
    }

    if (value.length <= limit) {
      return value;
    }

    let excerpt = value.substring(0, limit);
    excerpt = excerpt.substring(0, excerpt.lastIndexOf(' '));
    excerpt += ' ...';
    return excerpt;
  }
}
