function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  console.log(alphabet.length);
  var nw = "!@#$%^&*()<>?:[];',./ ";
  var new_str = "";

  for(let i = 0; i < str.length; i++)
  {
    if(nw.indexOf(str[i]) < 0)
    {
      var pos = alphabet.indexOf(str[i]);
      new_str += alphabet[(pos+13)%alphabet.length];
    }
    else
    {
      new_str += str[i];
    }
    
  }
  console.log(new_str);
  return new_str;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
