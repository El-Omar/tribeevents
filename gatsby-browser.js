export const onInitialClientRender = () => {
  document.fonts.onloadingdone = function () {
    document.getElementById("___loader").style.display = "none";
    document.body.style = "";
  };
}