const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt user to sleect a media stream and pass it to video element and then play 
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    }
  } catch (error) {
    // catch error here 
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // disable the button when clicked 
  button.disabled = true;
  // start picture in picture 
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();