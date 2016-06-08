/*
 * 	Institut für Rundfunktechnik (IRT | www.irt.de) Germany, 2014
 *	
 * 	Demo of simple HbbTV Application realised within the EU founded TV-Ring project. 
 * 	contact: contact@hbbtv-developer.com
 */

var header= "";
var content= "";

function initApp() 
{
	app_area = document.getElementById("app_area");
	info_field = document.getElementById("info_field");
		
	header = "Hello World!";
	content = 	"This is a simple HbbTV-Application that will be displayed "  +
				"on every SmartTV." + "<br/>" +
				"More information on how to develop apps for connected " +
				"TV devices that use the HbbTV standard can be found on " +
				"www.hbbtv-developer.com."
				
				

	document.getElementById("header_field").innerHTML = header;			
	document.getElementById("content_field").innerHTML = content;			
	
	// make <div>-container elements visible
	app_area.style.visibility = "visible";
	info_field.style.visibility = "hidden";
	
	var app = document.getElementById('appMan').getOwnerApplication(document);
	app.show();
	//Needs to be called within broadcast related applications as expected within the HbbTV specification 6.2.2.4

	var br_panel_br_handle = null;
	br_panel_br_handle = document.createElement("object");
	br_panel_br_handle.setAttribute("id", "broadcast");
	br_panel_br_handle.setAttribute("type", "video/broadcast");

	var video = document.getElementById("videoarea");
	video.appendChild(br_panel_br_handle);
	br_panel_br_handle.bindToCurrentChannel();

	setKeyset(0x1+0x2+0x4+0x8+0x10);
}

function registerKeyEventListener() {
  document.addEventListener("keydown", function(e) {
    if (handleKeyCode(e.keyCode)) {
      e.preventDefault();
    }
  }, false);
}

function setKeyset(mask) { 
  // for HbbTV 1.0:
  try {
    var app = document.getElementById('appMan').getOwnerApplication(document);
    app.privateData.keyset.setValue(mask);
  } catch (e) {
    // ignore
  }
}



