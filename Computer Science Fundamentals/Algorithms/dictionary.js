function binarySearch(collection, value) {
    value = value.toLowerCase()
    let low = 0;
    let high = collection.length - 1;
    let mid = Math.floor((low + high) / 2);
    while (collection[mid] !== value && low <= high) {
      if (collection[mid] > value) high = mid - 1
      else low = mid + 1
      mid = Math.floor((low + high) / 2)
    }
    return collection[mid] === value ? mid : -1;
  }
  
  let dict = [ 'ability', 'absence', 'academy', 'account', 'accused', 'achieve', 'acquire', 'address', 'advance', 'adverse', 'advised', 'against', 'airport', 'albatross', 'alcohol', 'alleged', 'already', 'analyst', 'ancient', 'another', 'anybody', 'applied', 'arrival', 'article', 'assumed', 'attempt', 'attract', 'average', 'backing', 'balance', 'banking', 'bargain', 'barrier', 'baseman', 'battery', 'bearing', 'beating', 'because', 'bedroom', 'believe', 'beneath', 'benefit', 'besides', 'between', 'bidding', 'billing', 'billion', 'binding', 'biology', 'booking', 'breadth', 'brother', 'brought', 'builder', 'burning', 'eastern', 'economy', 'edition', 'elderly', 'elegant', 'element', 'embrace', 'endless', 'enforce', 'engaged', 'enhance', 'episode', 'essence', 'ethical', 'evening', 'evident', 'exactly', 'examine', 'example', 'excited', 'exclude', 'execute', 'exhibit', 'expense', 'explain', 'exploit', 'explore', 'express', 'extract', 'extreme','ideally', 'illegal', 'illness', 'imagery', 'imagine', 'imaging', 'immense', 'impetus', 'impress', 'improve', 'impulse', 'include', 'indices', 'indoors', 'inhibit', 'initial', 'inquiry', 'insider', 'insight', 'inspect', 'inspire', 'install', 'instant', 'instead', 'insulin', 'insured', 'insurer', 'intense', 'interim', 'invalid', 'invoice', 'involve', 'isolate', 'observe', 'obvious', 'offense', 'officer', 'ongoing', 'opening', 'operate', 'opinion', 'optical', 'optimal', 'optimum', 'organic', 'outcome', 'outdoor', 'outline', 'outlook', 'outside', 'overall', 'unarmed', 'unaware', 'uncanny', 'unclear', 'uncover', 'undergo', 'undoing', 'unequal', 'unhappy', 'unheard', 'uniform', 'unitary', 'unknown', 'unleash', 'unlucky', 'unnamed', 'unravel', 'unusual', 'upgrade', 'upright', 'upscale', 'upstart', 'upstate', 'upsurge', 'upswing', 'uptrend', 'uranium', 'urgency', 'urinary', 'useless', 'utility', 'utilize', 'utterly'  ]
    
  binarySearch(dict,'albatross') // 13
  binarySearch(dict, 'isolate') // 117
  binarySearch(dict,"carriage") // -1