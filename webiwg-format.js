/**
 * TODO: refatorar (fititnt, 2016-10-04 23:42)
 */
var _IWGmaxline = 120;
var _IWGminsubtoken = 32;

// TODO considerar "..." como quebra de linha
// TODO considerar "—" como quebra de linha

function IWGDebug(input) {
  var result = "", blocks = input.replace(/(\r\n\r\n|\n\n)/gm, "_😝_").split("_😝_");
  //console.log('aaa', blocks);

  for (let i = 0; i < blocks.length; i++) {
    result += mdblockToSentences(blocks[i]).join("\r\n") + "\r\n\r\n";
  }

  return result;
}

function mdblockToSentences(block) {
  var result, frases = block.replace(/([.:;]+)/g, '$1§sep§').split('§sep§');

  frases = frases.map(function (el) {
    return el.replace(/(\r\n|\n|\r)/gm, " ").trim();
  });

  result = mdblockToSentencesEventShorter(frases);
  result = mdblockToSentencesEventShorter(result, " (", -1, _IWGminsubtoken);

  //console.log(frases, "aaa", mdblockToSentencesEventShorter(frases));
  return result;
}

function mdblockToSentencesEventShorter(frases, splitchar = ", ", pos = 1, mintoken = 0) {
  var novaFrases = [];
  for (let i = 0; i < frases.length; i++) {

    //if (frases[i].length < mintoken) {
    //  console.log('aeee', mintoken, frases[i].length);
    //  return frases;
    //}

    if (frases[i].length > _IWGmaxline) {
      let t = 0, tokens = frases[i].split(splitchar);
      while (t < tokens.length - 1) {
        if (pos > 0) {
          tokens[t] += splitchar.trim();
        } else {
          tokens[t + 1] = splitchar.trim() + tokens[t + 1];
        }

        t += 1;
      }

      console.log("split", frases[i], "novo", tokens)
      novaFrases = novaFrases.concat(tokens);
    } else {
      novaFrases.push(frases[i]);
    }
  }

  return novaFrases;
}