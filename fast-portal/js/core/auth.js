/* Restricted login, session enter/exit, navigation, logout */
function doLogin(){const u=$("#lu").value.trim().toLowerCase(),p=$("#lp").value;st.err="";if(st.lt=="admin"){if(u==ADM.u&&p==ADM.p)return enter("admin");st.err="Incorrect admin email or password."}else{const t=st.teachers.find(x=>x.email.toLowerCase()==u&&x.pw==p);if(!t)st.err="Login failed. Only teachers registered by the admin can log in.";else if(t.restricted)st.err="Your access is restricted by the admin. Please contact the administration.";else{st.me=t.n;t.on=1;t.dev=(t.dev||0)+1;return enter("teacher")}}render()}
function enter(r){st.role=r;st.td=TODAY;st.vt=0;st.err="";st.page=r=="admin"?"Dashboard":me().done?"Home":"Department";render()}
function go(p){document.body.classList.remove("nav");exitV();st.rp=0;st.page=p;st.ed=-1;render()}
const nav=p=>st.vt?(st.vp=p,render()):go(p);
function exitV(){if(st.vt){st.me=st.real;st.vt=0;st.dept="";st.pick=[];st.sch=null}}
function logout(){exitV();if(st.role=="teacher"){const t=me();if(t){t.on=0;t.dev=0}}st.role="";render()}
