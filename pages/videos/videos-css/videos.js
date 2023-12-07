if (window.innerWidth < 1600) {
  fetch("./videos.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById("videos").innerHTML = data
      .map(
        (item) =>
          `
          <div class="video">
            <a href="${item.link}" class="video-link">
              <img src="../../../imgs/fundovideo.jpg" alt="">
              <p class="inner-desc">${item.title}</p>
            </a>
            <p>${item.name}</p>
          </div>
          `
      )
      .join("");
  });
}

if (window.innerWidth >= 1600) {
  fetch("./videos.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("videos").innerHTML = data
        .slice(0, 10)
        .map(
          (item) =>
            `
            <div class="video">
              <a href="${item.link}" class="video-link">
                <img src="../../../imgs/fundovideo.jpg" alt="">
                <p class="inner-desc">${item.title}</p>
              </a>
              <p>${item.name}</p>
            </div>
            `
        )
        .join("");
    });
}

if(window.innerWidth >= 1735) {
  fetch("./videos.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById("videos").innerHTML = data
      .map(
        (item) =>
          `
          <div class="video">
            <a href="${item.link}" class="video-link">
              <img src="../../../imgs/fundovideo.jpg" alt="">
              <p class="inner-desc">${item.title}</p>
            </a>
            <p>${item.name}</p>
          </div>
          `
      )
      .join("");
  });
}