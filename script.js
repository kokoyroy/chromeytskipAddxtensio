const timer = setInterval(() => {
    const skipbtn = document.querySelector('.ytp-ad-skip-button.ytp-button')
    if (skipbtn != undefined) {
        skipbtn.click()
        // clearInterval(timer);
    }
}, 1000)