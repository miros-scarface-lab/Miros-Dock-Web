const downloadLinks = {
  Android: {
    github: "https://github.com/Miros-Send/MirosSend/releases/tag/android",
    web: "https://mirossend.com/download/android",
  },
  Windows: {
    github: "https://github.com/Miros-Send/MirosSend/releases/tag/windows",
    web: "https://mirossend.com/download/windows",
  },
};

const downloadDialog = document.querySelector(".download-dialog");
const dialogPlatform = document.querySelector("#dialog-platform");
const githubLink = document.querySelector("#github-link");
const webLink = document.querySelector("#web-link");

document.querySelectorAll("[data-platform]").forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platform;
    const links = downloadLinks[platform];

    if (!links) {
      return;
    }

    dialogPlatform.textContent = platform;
    githubLink.href = links.github;
    webLink.href = links.web;
    downloadDialog.showModal();
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
