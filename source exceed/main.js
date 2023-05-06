// * get language
const lang = navigator.language.split("-")[0];
// * language msg
fetch("data.json")
  .then((response) => response.json())
  .then(async (data) => {
    // * default msg
    const defMsg = data[0].msg;
    // * msg
    const msg = (await data.find((e) => e.lang === lang)?.msg) ?? defMsg;
    document.getElementById("msg").innerText = msg;
  });
// * footer domain
const domain = window.location.hostname;
const result = domain ? domain : "example.com";
document.getElementById("link").innerText = result;
