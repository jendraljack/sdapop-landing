const xhr = new XMLHttpRequest();
xhr.onload = () => { console.log(xhr.responseXML.title);};
xhr.open("GET", "https://www.popads.net/api/website_code?key=48788da34be3075841a507efd6e6f05aa8294f2d&website_id=3437077&tl=always&aab=1&of=1");
xhr.responseType = "document";
xhr.send();
