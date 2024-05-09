function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")  //mudar de dark para light
   // if(html.classList.contains('light')){
   //     html.classList.remove('light')
   // }else{
   //     html.classList.add('light')
   // }


   // Mudar Imagem de Fundo **
   // Se tiver light mode, adicionar a imagem light
   // se tiver sem light mode, mander a imagem normal

   //pegar a tag img
   const img = document.querySelector("#profile img") // o argumento que vai dentro é o mesmo seletor do CSS
   const textFoto = document.querySelector("#profile img") // substituir texto de descrição da imagem
   
   //substituir a imagem
   if(html.classList.contains("light")){
    // se tiver light
    img.setAttribute("src", "./assets/sun.png")
    textFoto.setAttribute("alt", "Foto com fundo escuro, Usando oculos escuro")

   }else{
    //se tiver sem light mode
    img.setAttribute("src", "./assets/lua-cheia.png")
    textFoto.setAttribute("alt", "Foto com fundo amarelo, Usando oculos normal ")

   }



}