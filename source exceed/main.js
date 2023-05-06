// * get language
const lang = navigator.language.split("-")[0];
// * language msg
fetch("data.json")
  .then((response) => response.json())
  .then(async (data) => {
    // * default title msg
    const defMsg = data[0].msg;
    const defTitle = data[0].title;
    // * title msg
    const msg = (await data.find((e) => e.lang === lang)?.msg) ?? defMsg;
    const title = (await data.find((e) => e.lang === lang)?.title) ?? defTitle;
    document.title = title;
    document.getElementById("title").innerText = title;
    document.getElementById("msg").innerText = msg;
  });
// * footer domain
const domain = window.location.hostname;
const result = domain ? domain : "example.com";
document.getElementById("link").innerText = result;
