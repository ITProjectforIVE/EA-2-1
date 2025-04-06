document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("video-container");
  const backgroundImage = document.getElementById("background");
  const buttons = document.querySelectorAll(".video-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const video1Source = button.getAttribute("data-video1");
      const video2Source = button.getAttribute("data-video2");

      // Create the first video element
      const videoElement1 = document.createElement("video");
      videoElement1.src = video1Source;
      videoElement1.autoplay = true;
      videoElement1.muted = true;
      videoElement1.className = "background-video";

      // When the first video ends, replace it with the second video
      videoElement1.addEventListener("ended", () => {
        const videoElement2 = document.createElement("video");
        videoElement2.src = video2Source;
        videoElement2.autoplay = true;
        videoElement2.muted = true;
        videoElement2.loop = true; // Make video 2 loop indefinitely
        videoElement2.className = "background-video";

        // Remove the first video and add the second video
        videoContainer.innerHTML = "";
        videoContainer.appendChild(videoElement2);
      });

      // Remove any existing video or image and add the first video
      videoContainer.innerHTML = "";
      videoContainer.appendChild(videoElement1);

      // Hide the default background image
      backgroundImage.style.display = "none";
    });
  });
});