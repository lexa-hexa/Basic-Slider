var models = [
    {
        name: "Spring",
        image: "img/spring.jpg",
        link:"#"
    },
    {
        name: "Summer",
        image: "img/summer.jpg",
        link:"#"
    },
    {
        name: "Autumn",
        image: "img/autumn.jpg",
        link:"#"
    },
    {
        name: "Winter",
        image: "img/winter.jpg",
        link:"#"
    }
];


var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '3000',
    random : false
};

init(settings);

document.querySelector('.bxs-left-arrow-square').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.bxs-right-arrow-square').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



