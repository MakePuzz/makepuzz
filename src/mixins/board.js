const board = {
  methods: {
    board() {
      const puzzle_data = '{"prime_minister_of_japan_w15_h15_s808242020_e1247": {"bug": false, "epoch": 1247, "evaluation": {"0": 0, "1": 0, "10": 0, "2": 0, "3": 1, "4": 2, "5": 1, "6": 0, "7": 0, "8": 0, "9": 0}, "height": 15, "is_unique": true, "words": [["", "み", "き", "た", "け", "お", "", "", "", "", "", "よ", "", "", ""], ["", "や", "", "", "", "", "あ", "", "", "あ", "べ", "し", "ん", "ぞ", "う"], ["", "ざ", "", "も", "り", "よ", "し", "ろ", "う", "", "", "だ", "", "", ""], ["", "わ", "", "", "", "", "だ", "", "の", "だ", "よ", "し", "ひ", "こ", ""], ["", "き", "", "", "", "", "ひ", "", "そ", "", "", "げ", "", "", ""], ["", "い", "け", "だ", "は", "や", "と", "", "う", "", "", "る", "", "", ""], ["", "ち", "", "", "ら", "", "し", "", "す", "", "", "", "", "", ""], ["い", "", "", "", "た", "", "", "た", "け", "し", "た", "の", "ぼ", "る", ""], ["ぬ", "", "", "", "か", "", "", "", "", "", "な", "", "", "", "さ"], ["か", "い", "ふ", "と", "し", "き", "", "", "あ", "", "か", "", "た", "", "い"], ["い", "", "く", "", "", "し", "", "", "そ", "", "か", "ん", "な", "お", "と"], ["つ", "", "だ", "", "", "の", "", "", "う", "", "く", "", "か", "", "う"], ["よ", "", "や", "", "", "ぶ", "", "", "た", "", "え", "", "ぎ", "", "ま"], ["し", "", "す", "", "", "す", "", "", "ろ", "", "い", "", "い", "", "こ"], ["", "", "お", "ぶ", "ち", "け", "い", "ぞ", "う", "", "", "", "ち", "", "と"]], "mask": null, "name": "内閣総理大臣", "nwords": 21, "seed": 808242020, "width": 15}}'
      const jsonObject = JSON.parse(puzzle_data)
      const id = Object.keys(jsonObject)[0]
      const height = jsonObject[id]['height']
      const width = jsonObject[id]['width']
      //const name = jsonObject[id]['name']
      const words = jsonObject[id]['words']
      //const nwords = jsonObject[id]['nwords']

      // 
      var ban_ar = new Array(width)
      for(var x=0; x<ban_ar.length; x++){
          ban_ar[x] = new Array(height)
      }

      // create word list from json data
      var word_list_row = new Array();
      var word_list_col = new Array();
      // For Array trans
      const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

      word_list_row = this.find_word(words)
      word_list_col = this.find_word(transpose(words))

      var word_list = word_list_row.concat(word_list_col)
      // Sort by number of characters
      word_list.sort(function(a, b){
        if(a.length < b.length) return -1;
        else if(a.length > b.length) return 1;
        else return 0;
      });

    },
    find_word(ary, width, height){
      let word = new Array()
      for(var y=0; y<height; y++){
        let tmp = '';
        let ary_row = ary[y];
        for(var x=0; x<width; x++){
          if ( ary_row[x] == '' && tmp.length > 1 ){
            word.push(tmp);
            tmp = ''
          }
          else if ( ary_row[x] == '' && tmp.length == 1 ){
            tmp = '';
          }
          else{
            tmp = tmp + ary_row[x];
          }
        }
        if (tmp.length > 1 ){
          word.push(tmp);
        }
      }
      return word;
    },


  }
};

export default board;