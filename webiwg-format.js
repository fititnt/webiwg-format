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
      [lines[i], lines[i + 1]] = mesclaLinhas(lines[i], lines[i + 1]);
    }


    console.log(lines[i]);
    console.log(">", frases(lines[i]));
  }

  result = lines.join("\r\n");
  return result;
}

function frases(line) {
  var frases = line.split(". "), result;
  return frases;
}

function mesclaLinhas(line1, line2) {
  return [line1, line2];
}