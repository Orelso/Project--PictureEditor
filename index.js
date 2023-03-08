const inputs = document.querySelectorAll(".controls input");
const imageUpload = document.querySelector("#image-upload");
const img = document.querySelector("img");

function handleUpdate() {
  const suffix = this.dataset.sizing || " ";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    img.src = reader.result;
  });

  reader.readAsDataURL(file);
});
