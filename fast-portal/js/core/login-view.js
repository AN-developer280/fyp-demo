/* Login screen (styled with Tailwind utility classes) */
function loginView(){
 const a=st.lt=="admin",
 tab=on=>`cursor-pointer rounded-full border px-4 py-1.5 ${on?"border-transparent bg-gradient-to-r from-fast-ac to-fast-ac2 text-white":"border-fast-bd bg-white/60 text-fast-tx"}`,
 field="mb-2.5 flex flex-col gap-1 text-left text-xs text-fast-mu";
 return `<div class="mx-auto my-[6vh] w-full max-w-[430px] px-3 text-center">
 <div class="logo">🎓</div>
 <h2 class="text-2xl font-bold text-fast-pr">FAST Portal</h2>
 <p class="mb-1 font-semibold text-fast-ac">Faculty and Admin Scheduling Tool</p>
 <p class="mu mb-3">Restricted access — only registered users can log in.</p>
 <div class="mb-3 flex justify-center gap-2"><a class="${tab(a)}" onclick="st.lt='admin';st.err='';render()">Admin</a><a class="${tab(!a)}" onclick="st.lt='teacher';st.err='';render()">Teacher</a></div>
 <div class="card text-left"><label class="${field}">Email<input id="lu" type="email" placeholder="${a?"admin@fast.edu":"teacher@fast.edu"}"></label><label class="${field}">Password<input id="lp" type="password" onkeydown="if(event.key=='Enter')doLogin()"></label>${st.err?`<div class="err">${st.err}</div>`:""}<button class="w-full" onclick="doLogin()">Login as ${a?"Admin":"Teacher"}</button></div>
 <small class="mu">Demo — Admin: admin@fast.edu / admin123<br>Teacher: areeba@fast.edu / areeba123</small>
 <p class="mt-2"><a onclick="theme()">🌓 Theme</a></p><div class="wv login-wv"></div></div>`}
