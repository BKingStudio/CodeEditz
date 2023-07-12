function run() {
  let EditzHtmlCode = document.getElementById("html-editz").value;
  let EditzCssCode = document.getElementById("css-editz").value;
  let EditzJsCode = document.getElementById("js-editz").value;
  let EditzResultsCode = document.getElementById("Results").value;
  
  Results.contentDocument.body.innerHTML = EditzHtmlCode+"<style>"+EditzCssCode +"</style>";
  Results.contentWindow.eval(EditzJsCode); 
}
