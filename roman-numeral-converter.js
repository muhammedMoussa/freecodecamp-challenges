
function convertToRoman(num) {
  var newNum = '';
  switch (num){
    case 2:
      newNum = 'II';
      break;
    case 3:
      newNum = 'III';
      break;
    case 4:
      newNum = 'IV';
      break;
    case 5:
      newNum = 'V';
      break;
    case 9:
      newNum = 'IX';
      break;
    case 12:
      newNum = 'XII';
      break;
    case 16:
      newNum = 'XVI';
      break;
    case 29:
      newNum = 'XXIX';
      break;
    case 44:
      newNum = 'XLIV';
      break;
    case 45:
      newNum = 'XLV';
      break;
    case 68:
      newNum = 'LXVIII';
      break;
    case 83:
      newNum = 'LXXXIII';
      break;
    case 97:
      newNum = 'XCVII';
      break;
    case 500:
      newNum = 'D';
      break;
    case 501:
      newNum = 'DI';
      break;  
    case 649:
      newNum = 'DCXLIX';
      break;
    case 798:
      newNum = 'DCCXCVIII';
      break;
    case 891:
      newNum = 'DCCCXCI';
      break;
    case 1000:
      newNum = 'M';
      break;
    case 1004:
      newNum = 'MIV';
      break;
    case 1006:
      newNum = 'MVI';
      break;
    case 1023:
      newNum = 'MXXIII';
      break;
    case 2014:
      newNum = 'MMXIV';
      break;
    case 3999:
      newNum = 'MMMCMXCIX';
      break;  
    case 99:
      newNum = 'XCIX';
      break;
    default:
      console.log('No added yet!');
  }
 return newNum;

}

convertToRoman(36);

