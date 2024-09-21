function createSnowflake() {
    let randomani = Math.floor(Math.random() * 3 + 8) ;
    const snowflake = document.createElement('i');
    snowflake.classList.add('fas', 'fa-code', 'snowflake'); 
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; 
    snowflake.style.animationDuration = randomani + 's'; 
    snowflake.style.opacity = Math.random(); 
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; 
    document.body.appendChild(snowflake);


    setTimeout(() => {
        snowflake.remove();
    }, randomani * 1000  ); 


}

createSnowflake();
setInterval(createSnowflake, 1000); 
