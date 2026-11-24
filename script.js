const downloadLinks = {
  Android: {
    github: "https://github.com/Miros-Send/MirosSend/releases/tag/android",
    web: "https://drive.google.com/file/d/1Ld5LL1jOHxNs8ojtEB3NvZDuCi2AIDfi/view?usp=sharing",
    webLabel: "Download APK (.apk)",
  },
  Windows: {
    github: "https://github.com/Miros-Send/MirosSend/releases/tag/windows",
    web: "https://drive.google.com/file/d/1ZEFivkR8yK9TjkmPOZ3ynKNBd4DfCW0N/view?usp=sharing",
    webLabel: "Download Windows (.exe)",
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
    if (links.webLabel) {
      webLink.innerHTML = `${links.webLabel} <span aria-hidden="true">↗</span>`;
    }
    downloadDialog.showModal();
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
