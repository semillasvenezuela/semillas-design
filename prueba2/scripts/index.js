var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'
  });

  (function(){

    setTimeout(() => {
        animation.play();
    }, 1000);
      
  })();