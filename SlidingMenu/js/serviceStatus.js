var xmlDoc=loadXMLDoc("serviceStatus.xml");
var x=xmlDoc.getElementsByTagName("subway");

for (i=0;i<x.length;i++)
  {
  document.write(x[i].childNodes[0].nodeValue);
  document.write("<br>");
  }