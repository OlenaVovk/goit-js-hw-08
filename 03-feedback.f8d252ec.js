!function(){var e,t=document.querySelector(".feedback-form"),o=document.querySelector("input"),a=document.querySelector("textarea"),r="feedback-form-state",l={};t.addEventListener("input",(function(e){l[e.target.name]=e.target.value,console.log("formData",l);var t=JSON.stringify(l);localStorage.setItem(r,t)})),t.addEventListener("submit",(function(e){e.preventDefault(),console.log("ВІДПРАВКА ФОРМИ"),t.reset(),localStorage.removeItem(r),console.log("formData",l)})),e=JSON.parse(localStorage.getItem(r)),console.log("savedObj",e),e&&(o.value=e.email,a.value=e.message)}();
//# sourceMappingURL=03-feedback.f8d252ec.js.map
