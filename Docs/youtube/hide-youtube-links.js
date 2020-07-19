Hides all YouTube Links :)

let youTubeClasses = document.querySelectorAll('[class^="ytp"]')

youTubeClasses.forEach((element)=>{
    element.style.display = 'none'
})


--------------
V2

document.querySelectorAll('[class^="ytp"]').forEach((element)=>{
    element.style.display = 'none'
})


--------------------
Other Approaches/Notes:

Gets all the youtube elements on the page, and hides lots of stuff

document.querySelectorAll('[id^="ytp"]')

youtubeElements.forEach((element)=>{
    element.style.display = 'none'
})

Remove Video Title Link:
document.getElementsByClassName("ytp-title-link yt-uix-sessionlink")[0].style.display = 'none'

-----------------

For all elements that contain that

document.querySelectorAll('[class*="ytp"]')

-------------------------------


console.log('blog object: ', ${JSON.stringify(blog)});
            document.onload = function(){
                setTimeout(function(){ 
                    document.querySelectorAll('[class^="ytp"]').forEach((element)=>{
                        element.style.display = 'none'
                    }) 
                }, 
                3000);
            };