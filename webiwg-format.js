/**
 * TODO: refatorar (fititnt, 2016-10-04 23:42)
 */


/**
 *
 */
function IWG(input) {
  var lines = input.match(/[^\r\n]+/g), result, temp = [];
  console.log('start IWG', lines);
  for (let i = 0; i < lines.length; i++) {
    if (i + 1 < lines.length) {
      //console.log(lines);
      console.log('     >IWG loop<', lines[i], lines[i + 1]);
      //[lines[i], lines[i+1]] = mesclaLinhas(lines[i], lines[i + 1]);
      temp = mesclaLinhas(lines[i], lines[i + 1]);
      lines[i] = temp[0];
      if (temp[1] === false) {
        i += 1;
        if (i == lines.length +1) {
          lines.pop();
        }
      } else {
        lines[i + 1] = temp[1];
      }
    }


    //console.log(lines[i]);
    //console.log(">", frases(lines[i]));
  }

  result = lines.join("\r\n");
  return result;
}

/**
 * Split a string in a array, by dots or :
 * @param  {String} line
 * @return {Array}
 */
function frases(line, onlyReturnIfFull) {
  //console.log('     >frases loop<', line);
  //var frases = line.split ? line.split(". ") : line[0].split(". "); // POG
  //console.log('     >frases loop fim<', frases);
  //if (frases.length > 1) {
  //  frases[0] = frases[0] + ".";
  //  // @todo resolver demais casos
  //}
  var frases = [""], fraseCompleta = 0;
  line.trim();
  for (let i = 0, k = 0; i < line.length; i++) {
    frases[k] += line[i];
    if (line[i] === '.' || line[i] === ':') {
      k += 1;
      frases[k] = "";
      fraseCompleta += 1;
    }
  }

  return onlyReturnIfFull ? fraseCompleta : frases;
  //return frases.filter(n => true) ;
}

/**
 * Try to merge or split lines by final dot
 */
function mesclaLinhas(line1, line2) {
  var frasesLine1 = frases(line1), frasesLine2 = frases(line2), temp, pog = 0;

  console.log('     >mesclaLinhas inicio<', line1, line2);

  for (let i = 0; i < frasesLine1.length; i++) {
    console.log('     >mesclaLinhas loop<', frasesLine1[i].length, frasesLine1[i]);
    if (frasesLine1[i].length < 80) {
      if (frasesLine1.shift && frasesLine2.unshift) { // POG!
        console.log('     >mesclaLinhas loop inner, start <', frasesLine1, frasesLine2);
        temp = frasesLine1.shift();
        //frasesLine2.unshift(frasesLine1);
        frasesLine2 = frasesLine1.concat(frasesLine2);
        frasesLine1 = [temp];
        console.log('     >mesclaLinhas loop inner, end <', frasesLine1, frasesLine2);
      }

    }
  }
  //if (frasesLine1.join("").indexOf(".") || frasesLine1.join("").indexOf(":")) {
  //  frasesLine2 = frasesLine1.concat(frasesLine2);
  //  frasesLine2 = [];
  //}
  if (frases(line1, true) === 0) {
    return [frasesLine1.join(" ").trim() + " " + frasesLine2.join(" ").trim(), false];
  } else {
    console.log('     >mesclaLinhas fim<', frasesLine1.join(" "), frasesLine2.join(" "));
    return [frasesLine1.join(" ").trim(), frasesLine2.join(" ").trim()];
  }
}