export default string => {
  string = string.toLowerCase().replace(/<.+>/, ' ').replace(/\s+/, ' ');
  const chars = {
      'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'jo', 'ж':'zh', 'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'ju', 'я':'ja', ' ':'-', ';':'', ':':'', ',':'', '—':'-', '–':'-', '.':'', '«':'', '»':'', '"':'', '\'':'', '@':'', '!':''
  };
  let replacedString = '';

  for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      replacedString += char in chars ? chars[char] : char;
  }
  
  return replacedString;
};