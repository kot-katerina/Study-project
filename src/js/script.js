let slide = document.querySelector('.slide');
let taste = document.querySelector('.taste-js');
let list = document.querySelector('.list-js');
let blog = document.querySelector('.blog-js');
let contribute = document.querySelector('.contribute-js');
let labels = document.querySelectorAll('.label');


setInterval(function() {
    
	if(slide.classList.contains('one')) {
        slide.classList.remove('one');
        slide.classList.add('two');
        blog.classList.add('active');
        if(taste.classList.contains('active')) {
            taste.classList.remove('active');
        }
    } else if (slide.classList.contains('two')) {
        slide.classList.remove('two');
        slide.classList.add('three');
        list.classList.add('active');
        blog.classList.remove('active');
    } else if(slide.classList.contains('three')) {
        slide.classList.remove('three');
        slide.classList.add('four');
        contribute.classList.add('active');
        list.classList.remove('active');
    } else if (slide.classList.contains('four')) {
        slide.classList.remove('four');
        slide.classList.add('one');
        taste.classList.add('active');
        contribute.classList.remove('active');
    }
    
}, 4000);






