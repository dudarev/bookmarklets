try {
  fetch(
    ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer
      .captionTracks[0].baseUrl
  )
    .then((res) =>
      res.status === 200
        ? res.text()
        : Promise.reject(new Error("Transcript not available"))
    )
    .then((text) => {
      var d = document.createElement("div");
      d.innerHTML = text;
      text = Array.from(d.querySelectorAll("text"))
        .map((t) => t.innerText)
        .join("\n\n")
        .replace(/&#(\d+);/g, (m) => String.fromCharCode(m.replace(/\D/g, "")));
      console.log(text);
      navigator.clipboard
        .writeText(text)
        .then(() => alert("Transcript copied successfully!"))
        .catch((err) => {
          alert("Failed to copy transcript!");
          console.error(err);
        });
    })
    .catch((err) => {
      alert("Failed to fetch transcript!");
      console.error(err);
    });
} catch (err) {
  alert("Failed to fetch transcript!");
  console.error(err);
}
