
    const html = document.documentElement;
    const canvas = document.querySelector(".scrolling-airpods");
    const context = canvas.getContext('2d');  

    const currenFrame = index => (
        `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, "0")}.jpg`
    )
        
    const frameCount = 147;
        
    canvas.height = 770;
    canvas.width = 1158;
    const img = new Image();
    img.src = currenFrame(1); 
    img.onload = function(){
        context.drawImage(img, 0, 0)
    }
    
const updateImage = index => {
    img.src = currenFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrllTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrllTop /  maxScrollTop;
    

    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
    console.log(frameIndex);

    
    requestAnimationFrame( () => updateImage (frameIndex + 1));


    //부드럽게 동작하기 위함.
    const preloadImage = () => {
        for (let i=1; i<frameCount; i++) {
            const img = new Image();
            img.src = currenFrame(i);
        }
    }

    preloadImage();
})









