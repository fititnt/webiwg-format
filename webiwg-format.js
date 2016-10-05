/**
 * TODO: refatorar (fititnt, 2016-10-04 23:42)
 */


/**
 *
 */
function IWG(input) {
  var lines = input.match(/[^\r\n]+/g), result;

  for (let i = 0; i < lines.length; i++) {
    if (i + 1 < lines.length) {
      //console.log(lines);
      console.log('     >IWG loop<', lines[i], lines[i + 1]);
      [lines[i], lines[i + 1]] = mesclaLinhas(lines[i], lines[i + 1]);
    }


    //console.log(lines[i]);
    //console.log(">", frases(lines[i]));
  }

  result = lines.join("\r\n");
  return result;
}

/**
 * Split a string in a array, by dots
 * @param  {String} line
 * @return {Array}
 */
function frases(line) {
  //console.log('     >frases loop<', line);
  var frases = line.split ? line.split(". ") : line[0].split(". "); // POG
  //console.log('     >frases loop fim<', frases);
  if (frases.length > 1) {
    frases[0] = frases[0] + ".";
    // @todo resolver demais casos
  }
  return frases;
}

/**
 * Try to merge or split lines by final dot
 */
function mesclaLinhas(line1, line2) {
  var frasesLine1 = frases(line1), frasesLine2 = frases(line2), temp;

  for (let i = 0; i < frasesLine1.length; i++) {
    console.log('     >mesclaLinhas loop<', frasesLine1[i].length, frasesLine1[i]);
    if (frasesLine1[i].length < 40) {
      if (frasesLine1.shift && frasesLine2.unshift) { // POG!
        temp = frasesLine1.shift();
        //frasesLine2.unshift(frasesLine1);
        frasesLine2 = frasesLine1.concat(frasesLine2);
        frasesLine1 = [temp];
        console.log(frasesLine1, frasesLine2);
      }

    }
  }
  return [frasesLine1, frasesLine2];
}