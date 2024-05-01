import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(items: any, searchString: string) {
    if(items.length==0) return [];
    if(searchString=='') return items;
    searchString = searchString.toLowerCase()
    return items.filter((item: {title: string, author: string}) => item.title.toLowerCase().includes(searchString) || item.author.toLowerCase().includes(searchString));
  }

}
