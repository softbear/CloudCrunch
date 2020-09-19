document.title="New tab";document.body.style.display="none";document.addEventListener("visibilitychange", function() {
  console.log(document.hidden, document.visibilityState);
    if(document.visibilityState==="visible"){
      console.log('resize');
      window.open("https://google.com","_self");
      //window.open("","_blank")
      open(location, '_self').close();
    }
}, false);
