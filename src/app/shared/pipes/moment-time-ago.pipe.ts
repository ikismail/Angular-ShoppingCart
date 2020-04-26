import { Pipe, PipeTransform } from "@angular/core";

declare var moment: any;

@Pipe({
  name: "momentTimeAgo",
})
export class MomentTimeAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (
      moment(value)
        // .startOf("day")
        .from(new Date())
    );
  }
}
