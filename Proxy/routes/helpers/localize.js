exports.localize = (txt, language) => {
  let lclzdText;
  switch(language){
    case "en" :
      if(txt == "title")
        lclzdText = "Basic Localization with JavaScript";
      if(txt == "alertBtn")
        lclzdText = "Show Alert";
      if(txt == "alertMsg")
        lclzdText = "This is my message.";
      break;
    case "id" :
      if(txt == "title")
        lclzdText = "Localization sederhana dengan JavaScript";
      if(txt == "alertBtn")
        lclzdText = "Tampilkan Pesan";
      if(txt == "alertMsg")
        lclzdText = "Ini adalah pesan saya.";
      break;
    case "jv" :
      if(txt == "title")
        lclzdText = "Nggawe Localization seng gampang";
      if(txt == "alertBtn")
        lclzdText = "Ketokno Tulisan";
      if(txt == "alertMsg")
        lclzdText = "Iki tulisanku";
      break;
  }
  return lclzdText;
}