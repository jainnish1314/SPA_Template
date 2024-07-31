function signIn()
{
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    
    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params = {
        "client_id":"703310288937-m5t1ki80ogdfl3i0seuu168bnbk5h8qa.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5500/src/profile.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
        "include_granted_scopes":"true",
        'state':'pass-through-value'
    }

    for(var p in params)
        {
            let input = document.createElement('input')
            input.setAttribute('type','hidden')
            input.setAttribute('name',p)
            input.setAttribute('value',params[p])
            form.appendChild(input)
        }

        document.body.appendChild(form)
        form.submit();
}
const nav = document.querySelector('.navbar')
fetch('http://127.0.0.1:5500/letsbekind/src/Navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}




