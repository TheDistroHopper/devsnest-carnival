(() => {
  const Selectors = {
    button: document.querySelector(".btn"),
    url: "https://api.imgflip.com/get_memes",
    display: document.querySelector(".display"),
    img: document.querySelector(".img"),
    title: document.querySelector(".meme--title"),
  };
  let getPic = async () => {
    let res = await axios.get(Selectors.url);
    let memeArr =
      res.data.data.memes[
        Math.floor(Math.random() * res.data.data.memes.length)
      ];
    console.log(memeArr);
    Selectors.img.src = memeArr.url;
    Selectors.title.textContent = memeArr.name;
    return memeArr;
  };
  Selectors.button.addEventListener("click", getPic);
})();
