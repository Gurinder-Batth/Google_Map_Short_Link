function doGet(e) {
  var location = e.parameter.location; 
  var req = location
  var response = UrlFetchApp.fetch(req,{followRedirects: false});
  var longUrl  = decodeURIComponent(response.getHeaders()['Location']);
  var matches  = longUrl.match(/@([0-9]?[0-9]\.[0-9]*),([0-9]?[0-9]\.[0-9]*)/);
  var regex    = new RegExp('@(.*),(.*),');
  var lat_long_match = longUrl.match(regex);
  var lat   = lat_long_match[1];
  var long  = lat_long_match[2];
  var data  = {'lat': lat,"long":long};
  var params = JSON.stringify(data);
  return ContentService.createTextOutput(JSON.stringify(data) ).setMimeType(ContentService.MimeType.JSON);
}