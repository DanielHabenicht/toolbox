import { Component } from '@angular/core';

@Component({
  selector: 'app-encoding',
  templateUrl: './encoding.component.html',
  styleUrls: ['./encoding.component.scss']
})
export class EncodingComponent {
  public rows: {
    character: string,
    index: number,
    matches: boolean
  }[] = []

  public characters: string[] = []
  public characters_match_regex: boolean[] = []
  public regex = /[\p{L}\p{M}]/u

  public ngOnInit(){


    let highNumber = 10000; //This could go very high
    let arr = []
    let reg = []
    let local_rows = []
    for(let i=33;i<highNumber;i++){
        let char = String.fromCharCode(i)
        arr.push(char)
        let tests = this.regex.test(char)
        reg.push(tests)

        local_rows.push({
          "character": char,
          "index": i,
          "matches": tests
        })
    }
    this.rows = local_rows
    this.characters = arr
    this.characters_match_regex = reg
  }

}
