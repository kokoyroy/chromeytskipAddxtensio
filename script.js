setInterval(() => {
  const skipbtn = document.querySelector(".ytp-skip-ad-button");
  const smalladd = document.querySelector(".ytp-ad-overlay-close-button");

  if (skipbtn != undefined) {
    console.log("ekleisa ti diafimisi ti megali");
    skipbtn.click();
  }
  if (smalladd != undefined) {
    console.log("ekleisa ti diafimisi ti mikri");
    smalladd.click();
  }
}, 1000);
