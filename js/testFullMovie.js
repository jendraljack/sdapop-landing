function makeHttpObject() {
  if ('XMLHttpRequest' in window)
    return new XMLHttpRequest();
  else if ('ActiveXObject' in window)
    return new ActiveXObject('Msxml2.XMLHTTP');
}
var request = makeHttpObject();
request.open("GET", "https://www.popads.net/api/website_code?key=26eb4d85b340a87a3c09d20ea5e5aa72e007d7a6&website_id=5097035&tl=always&aab=1&of=1", true);
 request.setRequestHeader("Host", "www.popads.net");
request.setRequestHeader("Upgrade-Insecure-Requests", "1");
request.setRequestHeader("Access-Control-Allow-Origin", "https://www.popads.net");
request.setRequestHeader("Content-Type", "text/plain");
 request.setRequestHeader("User-Agent", "PHP/7.2");
request.send("");
request.onreadystatechange = function() {
  if (request.readyState == 4) alert("<html><head>" + (request.response) + "</head><body><p>555</p></body></html>");}
