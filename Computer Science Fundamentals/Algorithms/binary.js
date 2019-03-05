function binarySearch(collection, value) {
  collection = collection.sort()
  value = value.toLowerCase()
  let low = 0;
  let high = collection.length - 1;

  let mid = Math.floor((low + high) / 2);
  while (collection[mid] !== value && low <= high) {
    if (collection[mid] > value) {
      high = mid - 1
      console.log(`high -- ${collection[high]} - ${high}`);
    }
    else {
      low = mid + 1
      console.log(`low -- ${collection[low]} - ${high}`);
      
    } 
    mid = Math.floor((low + high) / 2)
  }
  console.log(`mid -- ${collection[mid]}`)
  return collection[mid] === value ? mid : -1;
}

let dict = ["another", "against", "already", "ability", "average", "account", "address", "achieve", "applied", "attempt", "article", "advance", "acquire", "absence", "attract", "assumed", "airport", "advised", "accused", "anybody", "ancient", "analyst", "adverse", "arrival", "academy", "alleged", "alcohol", "albatross", "between", "because", "believe", "benefit", "brought", "billion", "balance", "banking", "brother", "bearing", "besides", "beneath", "bedroom", "burning", "binding", "battery", "beating", "backing", "barrier", "biology", "breadth", "baseman", "builder", "booking", "billing", "bargain", "bidding", "example", "economy", "eastern", "exactly", "evening", "expense", "express", "explain", "excited", "enhance", "engaged", "element", "edition", "examine", "extreme", "explore", "elderly", "evident", "exhibit", "exclude", "essence", "elegant", "exploit", "episode", "execute", "embrace", "ethical", "extract", "endless", "enforce", "include", "improve", "involve", "initial", "instead", "imagine", "instant", "insight", "intense", "interim", "illness", "illegal", "inquiry", "install", "imaging", "ideally", "insured", "immense", "insider", "imagery", "inspire", "insurer", "impulse", "inspect", "impetus", "indices", "insulin", "isolate", "inhibit", "invalid", "invoice", "indoors", "impress", "officer", "outside", "overall", "opening", "operate", "opinion", "obvious", "outcome", "outlook", "ongoing", "offense", "organic", "optical", "outdoor", "optimal", "outline", "observe", "optimum", "unknown", "unusual", "utility", "uniform", "upgrade", "upscale", "unhappy", "unclear", "unaware", "utilize", "undergo", "urgency", "utterly", "useless", "upright", "uranium", "uncover", "urinary", "unequal", "unnamed", "unitary", "unheard", "uncanny", "unlucky", "unleash", "unravel", "upsurge", "unarmed", "uptrend", "undoing", "upswing", "upstate", "upstart"]

// console.log(binarySearch(dict,'albatross'))

console.log(dict.indexOf('albatross'))