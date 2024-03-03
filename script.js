const akey="W5yuIgHqvXoyFc1yvuGl3IfzFOeuhehqErmsb7-Au0c";
const searchBox=document.getElementById("search-Box");
const searchResult=document.getElementById("search-Result");
const showMoreBtn=document.getElementById("show-More-Btn");
const searchForm=document.getElementById('search-Form');

let keyword="";
let page=1;
//https://api.unsplash.com/search/photos?page=1&query=office
async function searchImages(){
   
   
    keyword = searchBox.value;//the search word we entered to search is stored here
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${akey}&per_page=12`;
    
    const response=await fetch(url);
    const data=await response.json();

   // console.log(data);
   if(page==1){
     searchResult.innerHTML="";//this is added because if after searching for a result if another is typed
     //then the newly entered result's images should come in the first so that's why it is added
   }
   const results=data.results;

   results.map((result)=>{
    const image=document.createElement("img");//img tag is created here
    image.src=result.urls.small;
    const imageLink=document.createElement("a");//creating a link for the image
    imageLink.href=result.links.html;
    imageLink.target="_blank";//if clicked on image it will be opened in new window

    imageLink.appendChild(image);//means this image will be inside this a tag
    searchResult.appendChild(imageLink);
   })
   showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;//because for every entered new word in the search bar page is new page right
    searchImages();
});

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

//accesskey:W5yuIgHqvXoyFc1yvuGl3IfzFOeuhehqErmsb7-Au0c;
//https://api.unsplash.com/search/photos?page=1&query=office