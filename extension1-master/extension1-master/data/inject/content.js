window.addEventListener("blur",(function(){window.focus()})),window.forceBrowserDefault=e=>(e.stopImmediatePropagation(),!0),["copy","cut","paste"].forEach((e=>document.addEventListener(e,window.forceBrowserDefault,!0)));