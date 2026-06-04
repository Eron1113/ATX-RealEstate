document.addEventListener('DOMContentLoaded', function(){
    const theHamburger = document.querySelector('.hamburger-trigger');
    const theFullScreen = document.querySelector('.full-screen-menu')
    if(theHamburger && theFullScreen){
        theHamburger.addEventListener('click', function(){
            if(theHamburger.classList.contains('active-hamburger')){
                theHamburger.classList.remove('active-hamburger')
                theFullScreen.classList.remove('active-full-screen-menu')
            }else{
                theHamburger.classList.add('active-hamburger')
                theFullScreen.classList.add('active-full-screen-menu')
            }
        })
      const theHeader = document.querySelector('header');
      let lastScrollPosition = 0;

      window.addEventListener('scroll', function() {
        // Get the current scroll position
        let currentScrollPosition = window.scrollY; // Using window.scrollY for simplicity
        

        if (currentScrollPosition > 850) {

          if ((currentScrollPosition - 30 ) > lastScrollPosition) {
            theHeader.classList.add('down-scroll')
          } else if((currentScrollPosition + 30 ) < lastScrollPosition) {
         
            if(theHeader.classList.contains('down-scroll')){
                theHeader.classList.remove('down-scroll');
            }
          }
      
          // Update lastScrollPosition to the current scroll position
          lastScrollPosition = currentScrollPosition;
        }
      }, { passive: true });
      

    }
    if(document.querySelector('.header-categories')){
        const theSelectors = document.querySelectorAll('.header-categories button');
        const thePosts = document.querySelectorAll('.header-categories-posts-holder');
     
     
      

        thePosts.forEach((elem)=>{
            if(theSelectors[0].getAttribute('data-target')===elem.getAttribute('data-target')){
                theSelectors[0].classList.add('active-categories-posts-header')
                elem.classList.add('active-header-posts')
            }
        })

        theSelectors.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const theAttribute = elem.getAttribute('data-target');
                theSelectors.forEach((el)=>{
                    if(el!==elem && el.classList.contains('active-categories-posts-header')){
                        el.classList.remove('active-categories-posts-header')
                    }else if(el===elem){
                        el.classList.add('active-categories-posts-header')
                    }
                })

                thePosts.forEach((ele)=>{
                    if(ele.classList.contains('active-header-posts') && ele.getAttribute('data-target')!==theAttribute){
                        ele.classList.remove('active-header-posts');
                    }else if(ele.getAttribute('data-target')===theAttribute){
                        ele.classList.add('active-header-posts')
                    }
                })
            })
        })
    }

    if(document.querySelector('.single-number-wrapper')){
        const theSelectors = document.querySelectorAll('.single-number-wrapper');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
          };
      
          // Intersection Observer callback function
          const intersectionCallback = (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const children = entry.target.querySelector('.single-number-heading p');
                  const number = children.getAttribute('data-number');
                
                  let parsedNumber = parseInt(number);
                
                  let count =  0; // Ensure start number is within range
                  let intervalId;

                  if(parsedNumber >30){
                    count = parsedNumber - 30;
                  }else{
                    count = 0;
                  }
              
                  function formatNumber(number) {
                    return number.toLocaleString(); // Format number with commas
                  }
              
                  function countUp() {
                    if (count >= parsedNumber) {
                      clearInterval(intervalId);
                      return;
                    }
                    count++;
                    children.textContent = formatNumber(count);
                  }
              
                  intervalId = setInterval(countUp, 50); // Adjust the interval as needed
                  observer.unobserve(entry.target);
              }
            });
          };

          theSelectors.forEach(elem=>{
            const observer = new IntersectionObserver(intersectionCallback, observerOptions);
            observer.observe(elem);
          })
    }

    if(document.querySelector('.projektet-slider')){
        const theSelector = document.querySelectorAll('.projektet-slider');
        const theButtons = document.querySelectorAll('.button-swiper-triggers button');
        const theSliders = document.querySelectorAll('.swiper-holder');

        theButtons.forEach((elem)=>{
            elem.addEventListener('click', function(){
                let attribute = elem.getAttribute('data-target');
                let mainAttribute = elem.getAttribute('data-main');
                theButtons.forEach((el)=>{
                    if(el.classList.contains('active-category') && attribute!==el.getAttribute('data-target') && el.getAttribute('data-main')===mainAttribute){
                        el.classList.remove('active-category');
                    }else if(el.getAttribute('data-target')===attribute && el.getAttribute('data-main')===mainAttribute){
                        el.classList.add('active-category')
                    }
                })

                theSliders.forEach((el)=>{
                    if(el.classList.contains('active-slider') && attribute!==el.getAttribute('data-slider') && el.getAttribute('data-main')===mainAttribute){
                        el.classList.remove('active-slider')
                    }else if(el.getAttribute('data-slider')===attribute && el.getAttribute('data-main')===mainAttribute){
                        el.classList.add('active-slider');
                        const theMainSwiper = el.querySelector('.projektet-slider')
                  
                    }
                })
               
            })
        })

        theSelector.forEach((elem)=>{
        
                const titulli = elem.getAttribute('data-slider');
          
                const swiper = new Swiper(elem, {
                 
                    speed:1500,
                    spaceBetween:20,
                    navigation:{
                        nextEl:`.btn-next${titulli}`,
                        prevEl:`.btn-prev${titulli}`
                    },

              
                    breakpoints:{
                        1024:{
                            spaceBetween:50,
                            centerMode:true
                        }
                    }
                })
        
        })
    }

    if(document.querySelector('.projektet-buttons-wrapper')){
        const theSelector = document.querySelectorAll('.projektet-buttons-wrapper button')
        const theSliderBgs = document.querySelectorAll('.slider-bg');
        theSelector.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const target = elem.getAttribute('data-target');
                const number = elem.getAttribute('data-number');
    
                theSelector.forEach((ele)=>{
                    if(ele.classList.contains('active-slider-button') && ele!==elem){
                        ele.classList.remove('active-slider-button')
                    }else if(ele===elem){
                        elem.classList.add('active-slider-button')
                    }
                })

                theSliderBgs.forEach((el)=>{
                    const myTarget = el.getAttribute('data-target');
             
                    const theElSelector = el.querySelector('.swiper-holder .projektet-slider')
                    if(el.classList.contains('active-slide-bg') && myTarget!==target){
                        el.classList.remove('active-slide-bg')
                        if(theElSelector.classList.contains('active-slider')){
                            theElSelector.classList.remove('active-slider')
                        }
                    }else if(myTarget==target){
                        el.classList.add('active-slide-bg')
                        theElSelector.classList.add('active-slider')
                        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                        let offset =200;
                        if(typeof window.innerWidth !=="undefined" && window.innerWidth<768){
                            offset = 300;
                        }
                        window.scrollTo({
                            top: elementPosition -offset,
                            behavior: "smooth"
                        });
                    }
                })
            })
        })
    }



    if(document.querySelector('.shared-projekte-slider')){
       const mySwiper = new Swiper('.shared-projekte-slider',{
            direction:'horizontal',
            initialSlide:1,
            slidesPerView:1,
            speed:2500,
            spaceBetween:20,

            centeredSlides:true,
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },
       
            navigation:{
                nextEl:'.projekte-next',
                prevEl:'.projekte-prev'
            },
            breakpoints:{
                992:{
                    slidesPerView:1.15,
                    spaceBetween:26
                }
            },
            
        })


    }

    if(document.querySelector('.single-cilesi')){
        const theSelectors = document.querySelectorAll('.single-cilesi');

        theSelectors.forEach((elem)=>{
            elem.addEventListener('click', function(){
                if(elem.classList.contains('active-cilesi')){
                    elem.classList.remove('active-cilesi')
                }else{
                    elem.classList.add('active-cilesi')
                }
            })
        })
    }

    if(document.querySelector('.lajme-swiper')){
        new Swiper('.lajme-swiper', {
            slidesPerView:1,
            spaceBetween:20,
            speed:2000,
            navigation:{
                nextEl:'.lajme-next',
                prevEl:'.lajme-prev'
            },
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },
            breakpoints:{
                992:{
                    slidesPerView:3,
                    spaceBetween:16,
                },
                1400:{
                    slidesPerView:4,
                    spaceBetween:16,
                }
            }
        })
    }

    if(document.querySelector('.r-page-button')){
        const theSelector = document.querySelectorAll('.r-page-button');

        const mySwiper = new Swiper('.r-page-proceset', {
            slidesPerView:1,
            speed:2000,
            spaceBetween:20,
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },
            on:{
                slideChange: function(){
                    const theCurrentSlide = this.activeIndex;
                  
                    theSelector.forEach((elem)=>{
                        if(elem.classList.contains('active-page-button') && elem.getAttribute('data-target')!=theCurrentSlide){
                            if(elem.getAttribute('data-target')==0){
                                elem.classList.add('has-fill-svg-removed')
                            }
                            elem.classList.remove('active-page-button');
                        }else  if(elem.getAttribute('data-target')==theCurrentSlide){
                            if(elem.getAttribute('data-target')==0){
                                elem.classList.remove('has-fill-svg-removed')
                            }
                            elem.classList.add('active-page-button');
                        }
                    })
                }
            }
        })

        theSelector.forEach((elem)=>{
            elem.addEventListener('click', function(){
                theSelector.forEach((ele)=>{
                    if(ele.classList.contains('active-page-button') && ele!==elem){
                        if(ele.getAttribute('data-target')==0){
                            ele.classList.add('has-fill-svg-removed')
                        }
                        ele.classList.remove('active-page-button');
                    }else  if(ele===elem){
                        if(ele.getAttribute('data-target')==0){
                            ele.classList.remove('has-fill-svg-removed')
                        }
                        ele.classList.add('active-page-button');
                    }
                })
              const theTarget = elem.getAttribute('data-target');
              const theId = parseInt(theTarget);

              mySwiper.slideTo(theId);
            })
        })
    }


    if(document.querySelector('.p-categories-holder')){
        const theSelectors = document.querySelectorAll('.p-categories-holder button');
        const theCategories = document.querySelectorAll('.p-projekte-and-button');
    
    
 
        theSelectors.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const theTarget = elem.getAttribute('data-target');
                theSelectors.forEach((ele)=>{
                    if(ele.classList.contains('active-category') && ele!==elem){
                        ele.classList.remove('active-category');
                    }else if(ele===elem){
                        ele.classList.add('active-category');
                    }
                })

                theCategories.forEach((el)=>{
             
                    if(el.getAttribute('data-target')!==theTarget && el.classList.contains('active-projekte-wrapper')){
                        el.classList.remove('active-projekte-wrapper')
                    }else if(el.getAttribute('data-target')===theTarget){
                        el.classList.add('active-projekte-wrapper')
                    }
                })
            })
        })
   

    function handleHashChange(){
		console.log('test')
        if(theHamburger.classList.contains('active-hamburger')){
            theHamburger.classList.remove('active-hamburger')
            theFullScreen.classList.remove('active-full-screen-menu')
        }
        
        const myHash2 = window.location.hash;
        const myTarget = myHash2.split('#')
        if(myTarget.length>1){
            let myHash = myTarget[1];
            theSelectors.forEach((ele)=>{
                if(ele.classList.contains('active-category') && ele.getAttribute('data-target')!==myHash){
                    ele.classList.remove('active-category');
                }else if(ele.getAttribute('data-target')===myHash){
                    ele.classList.add('active-category');
                }
            })

            theCategories.forEach((el)=>{
         
                if(el.getAttribute('data-target')!==myHash && el.classList.contains('active-projekte-wrapper')){
                    el.classList.remove('active-projekte-wrapper')
                }else if(el.getAttribute('data-target')===myHash){
                    el.classList.add('active-projekte-wrapper')
                    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                    let offset =500;
                    if(typeof window.innerWidth !=="undefined" && window.innerWidth<768){
                        offset = 450;
                    }
                    window.scrollTo({
                        top: elementPosition -offset,
                        behavior: "smooth"
                    });
                   
                }
            })
      
        }
    }

    window.addEventListener('hashchange', handleHashChange)
    window.onload = handleHashChange;
    }
    if(document.querySelector('.p-projekte-add-more')){
        const theSelector = document.querySelectorAll('.p-projekte-add-more button');
        const theMainOne = document.querySelectorAll('.p-projekte-and-button');
        theMainOne.forEach((elem)=>{
            const theNewOnes = elem.querySelectorAll('a');
          
         
            if(theNewOnes.length<4){
                elem.querySelector('button').style.display="none";
            } 
        })
        let currentPage = 1;
        theSelector.forEach((elem)=>{
            elem.addEventListener('click', function(){
          
       
                const theAttribute = elem.getAttribute('data-target');
                if(theAttribute==='all'){
                    theSelector.forEach((el)=>{
                        if(el===elem && !elem.classList.contains('previouslyClicked')){
                            elem.classList.add('previouslyClicked')
                            currentPage = 1;
                            currentPage++;
                        }else if(el!==elem){
                            elem.classList.remove('previouslyClicked')
                        }
                    })
                    fetch('/wp-admin/admin-ajax.php', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        body: 'action=weichie_load_more&paged=' + currentPage
                      })
                        .then(function(response) {
                          if (!response.ok) {
                            throw new Error('Network response was not ok');
                          }
                          return response.json();
                        })
                        .then(function(res) {

                       
                      
                            const mySelector = document.querySelector('.all-categories');
                            
                          
                            mySelector.insertAdjacentHTML('beforeend', res.html);
                            if(currentPage>=res.max){
                                elem.style.display="none";
                            }
                        })
                        .catch(function(error) {
                          console.error('There was a problem with the fetch operation:', error.message);
                        });
                }else{
                    theSelector.forEach((el)=>{
                        if(el===elem && !elem.classList.contains('previouslyClicked')){
                            currentPage = 1;
                            currentPage++;
                            elem.classList.add('previouslyClicked')
                        }else if(el!==elem){
                            elem.classList.remove('previouslyClicked')
                        }
                    })
                    fetch('/wp-admin/admin-ajax.php', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                        body: 'action=weichie_load_more2&paged=' + currentPage + '&cat=' + parseInt(theAttribute)
                      })
                        .then(function(response) {
                          if (!response.ok) {
                            throw new Error('Network response was not ok');
                          }
                          return response.json();
                        })
                        .then(function(res) {

                            
                      
                            const mySelector = document.getElementById('theAttribute')
                            
                          
                            mySelector.insertAdjacentHTML('beforeend', res.html);
                            if(currentPage>=res.max){
                                elem.style.display="none";
                            }
                        })
                        .catch(function(error) {
                          console.error('There was a problem with the fetch operation:', error.message);
                        });
                }
            })
        })
    }

    if(document.querySelector('.p-projekte-cilesi-swiper')){
        new Swiper('.p-projekte-cilesi-swiper',
        {
            slidesPerView:1,
            speed:2000,
            spaceBetween:20,
            pagination:{
                el:'.rreth-pagination',
                type:'progressbar'
            },
            navigation:{
                nextEl:`.two-next`,
                prevEl:`.two-prev`
            },
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },

            breakpoints:{
                992:{
                    spaceBetween:50
                }
            }
        }
        )
    }

    

    if(document.querySelector('.s-pronat-wrapper')){
        const theSelectors = document.querySelectorAll('.s-pronat-wrapper');
        const theButtonSelectors = document.querySelectorAll('.banesa-buttons-wrapper button')
        const theTexts = document.querySelectorAll('.s-pronat-buton');

        theSelectors.forEach((elem)=>{
            const theSlidesLength = elem.querySelectorAll('.swiper-slide')
            if(theSlidesLength.length===0){
           
                const attribute = elem.getAttribute('data-target')
                theTexts.forEach((el)=>{
                   
                    if(el.getAttribute('data-target')===attribute){
                        el.classList.add('black-text');
                    }
                })
            }
        })

        theButtonSelectors.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const theElemTarget = elem.getAttribute('data-target')
                theTexts.forEach((el)=>{
                    if(el.classList.contains('active-btn-title') && el.getAttribute('data-target')!==theElemTarget){
                        el.classList.remove('active-btn-title')
                    }else if(el.getAttribute('data-target')===theElemTarget){
                        el.classList.add('active-btn-title')
                    }
                })

                theButtonSelectors.forEach((ele)=>{
                    if(ele.classList.contains('active-category') && ele!==elem){
                        ele.classList.remove('active-category');
                    }else if(ele===elem){
                        ele.classList.add('active-category');
                    }

                    theSelectors.forEach((ele)=>{
                        const theTarget = ele.getAttribute('id')
           
                        if(ele.classList.contains('active-vertical-slider') && theTarget!==theElemTarget){
                            ele.classList.remove('active-vertical-slider')
                        }else if(theTarget===theElemTarget){
                            ele.classList.add('active-vertical-slider')
                            if(ele.swiper){
                                ele.swiper.update();
                            }
                        }
                    })
                })
            })
        })

        theSelectors.forEach((elem)=>{
            const checkSlidesLength = elem.querySelectorAll('.swiper-slide')
           
            if(checkSlidesLength>0){
                new Swiper(elem,{
                    slidesPerView:1,
                    speed:500,
                    spaceBetween:20,
                    mousewheel: true,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable:true,
                        hide: false, // Set to true if you want to hide the scrollbar when not in use
                      },
         
                   // Allow touch events to start
                      allowTouchMove:'vertical',
                      breakpoints:{
                        992:{
                            direction:'vertical',
                            slidesPerView:2,
                            mousewheel: {
                                sensitivity: 1, // Adjust the sensitivity of mouse wheel scrolling (default is 1)
                                disableOnInteraction: true, // Disable mousewheel control after user interaction (default is false)
                                releaseOnEdges: true, 
                            } ,
                            
                        },
                        1400:{
                            direction:'vertical',
                            slidesPerView:3,
                      
                            
                        }
                      }
                })
            }else{
                elem.classList.add('hide');
            }
           
        })
    }

    if(document.querySelector('.gallery-projekte')){
        const theTrigger = document.querySelector('.shiko-button')
        const theFullGallery = document.querySelector('.full-screen-gallery');
        const theCloser = document.querySelector('.mbyll-holder');

        theTrigger.addEventListener('click',function(){
            if(!theFullGallery.classList.contains('active-full-screen-gallery')){
                theFullGallery.classList.add('active-full-screen-gallery')
                document.body.style.overflow = "hidden";
            }
        })

        theCloser.addEventListener('click', function(){
            if(theFullGallery.classList.contains('active-full-screen-gallery')){
                theFullGallery.classList.remove('active-full-screen-gallery')
                document.body.style.overflow = "auto";
            }
        })
        const theSwiper = new Swiper('.gallery-projekte',{
            slidesPerView:1,
            speed:2000,
            spaceBetween:20,
            centeredSlides: true,
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },
            navigation:{
                nextEl:`.gallery-next`,
                prevEl:`.gallery-prev`
            },
        })

        const theSelectors = document.querySelectorAll('.photo-holder');
        theSelectors.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const theTarget = elem.getAttribute('data-target');
                const theId = parseInt(theTarget);
                if(!theFullGallery.classList.contains('active-full-screen-gallery')){
                    theFullGallery.classList.add('active-full-screen-gallery')
                    document.body.style.overflow = "hidden";
                }

                theSwiper.slideTo(theId);
            })
        })
    }


    if(document.querySelector('.single-prona-swiper')){
        const swiper = new Swiper('.single-prona-nav-swiper', {
            slidesPerView:3,
            speed:2000,
            spaceBetween:16,
            slideToClickedSlide: true,
            breakpoints:{
                992:{
                    slidesPerView:4
                }
            },
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },
        })

        const mainSwiper = new Swiper('.single-prona-swiper', {
            slidesPerView:1,
            speed:2000,
            spaceBetween:20,
            thumbs:{
                swiper:swiper
            },
            autoplay:{
                delay:5000,
                disableOnInteraction:false
               },
            on: {
                slideChange: function () {
                  // Get the index of the current active slide in the main Swiper
                  let activeIndex = this.activeIndex;
                  
                  // Slide the thumbnail Swiper to the corresponding slide
                  swiper.slideTo(activeIndex);
                }
              }
        })

      


    }

    if(document.querySelector('.gallery-prona')){

        const theTrigger = document.querySelector('#interier-trigger')
        const theFullGallery = document.querySelector('.full-screen-gallery');
        const theCloser = document.querySelector('.mbyll-holder');

        theTrigger.addEventListener('click',function(){
            if(!theFullGallery.classList.contains('active-full-screen-gallery')){
                theFullGallery.classList.add('active-full-screen-gallery')
                document.body.style.overflow="hidden";
            }
        })

        theCloser.addEventListener('click', function(){
            if(theFullGallery.classList.contains('active-full-screen-gallery')){
                theFullGallery.classList.remove('active-full-screen-gallery')
                document.body.style.overflow="auto";
            }
        })

        new Swiper('.gallery-prona', {
            slidesPerView:1,
            speed:2000,
            spaceBetween:20,
            centeredSlides: true,
            navigation:{
                nextEl:`.gallery-next`,
                prevEl:`.gallery-prev`
            },
        })
    }


    if(document.getElementById('back-overview')){
        const theSelector = document.getElementById('back-overview');
        const theReferrer = document.referrer;
        const currentDomain = window.location.hostname;
        if(theReferrer === ""){
          theSelector.style.display = "none";
        }else if(theReferrer.includes(currentDomain)){
          theSelector.addEventListener('click', function(){
            window.history.back();
          })
        }
      }


    if(document.querySelector('.pagination-button')){
        const theSelectors = document.querySelectorAll('.pagination-button')
        const theElements = document.querySelectorAll('.news-slide-content');
      
        if(theElements.length<8){
            document.querySelector('.pagination-buttons-wrapper').style.display="none";
        }
        theSelectors.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const attribute = elem.getAttribute('data-id');
                let currentPage = parseInt(attribute);
                
                theSelectors.forEach((ele)=>{
                    if(ele.classList.contains('active-pagination-button') && ele!==elem){
                        ele.classList.remove('active-pagination-button')
                      
                    }else if(ele===elem && !ele.classList.contains('active-pagination-button')){
                        ele.classList.add('active-pagination-button')
                        fetch('/wp-admin/admin-ajax.php', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                            },
                            body: 'action=weichie_load_more3&paged=' + currentPage
                          })
                            .then(function(response) {
                              if (!response.ok) {
                                throw new Error('Network response was not ok');
                              }
                              return response.json();
                            })
                            .then(function(res) {

                           
                          
                                const mySelector = document.querySelector('.news-holder');
                                
                                mySelector.innerHTML =  res.html;
                                window.scrollTo({
                                    top:250,
                                    behavior:'smooth'
                                });
                            })
                            .catch(function(error) {
                              console.error('There was a problem with the fetch operation:', error.message);
                            });
                    }
                })
            })
        })
    }

    if(document.querySelector('#navigator-share')){
        const mySelector = document.querySelector('#navigator-share');
        mySelector.addEventListener('click', async function(e){
            let urlText = e.currentTarget.innerText;
            if(navigator.share){
                navigator.share({
                    url:urlText
                }).then(()=>console.log("successful share")).catch((err)=>console.log(err))
            }
        })
    }

    if(document.querySelector('.r-single-job-post')){
        const theSelector = document.querySelectorAll('.r-single-job-post');
        const thePopups = document.querySelectorAll('.r-page-job-popup');
        const theImage = document.querySelector('.r-page-image');
        const theContainer = document.querySelector('.r-page-pozitat-content')
        const theCloser = document.querySelectorAll('.mbyll-jobs');
        theSelector.forEach((elem)=>{
            elem.addEventListener('click', function(){
                const attribute = elem.getAttribute('data-target');

                thePopups.forEach((el)=>{
                    if( el.getAttribute('data-target')===attribute){
                        el.classList.add('active-job-posting')
                        theContainer.classList.add('inactive-container')
                        theImage.classList.add('inactive-image');
                    }
                })
            })
        })

        theCloser.forEach((ele)=>{ele.addEventListener('click', function(){
            const target = ele.getAttribute('data-target')
            thePopups.forEach((elem)=>{
                if(elem.classList.contains('active-job-posting') && elem.getAttribute('data-target')===target){
                    elem.classList.remove('active-job-posting')
                }
            })
            if( theContainer.classList.contains('inactive-container')){
                theContainer.classList.remove('inactive-container')
            }
            if(theImage.classList.contains('inactive-image')){
                theImage.classList.remove('inactive-image');
            }
            
        })

    })
    }

})