const menu=document.querySelector('.menu'), nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='76px';nav.style.right='20px';nav.style.padding='18px';nav.style.background='#0c1713';nav.style.border='1px solid #20322a';nav.style.borderRadius='10px';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=800)nav.style.display='none'}));
