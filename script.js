setInterval(() => {
    const skipbtn = document.querySelector('.ytp-ad-skip-button.ytp-button')
    const smalladd = document.querySelector('.ytp-ad-overlay-close-button')
    
    
    if (skipbtn != undefined) {
        console.log('ekleisa ti diafimisi ti megali');
        skipbtn.click()
    }
    if (smalladd != undefined) {
        console.log('ekleisa ti diafimisi ti mikri');
        smalladd.click()
    }
}, 1000)
