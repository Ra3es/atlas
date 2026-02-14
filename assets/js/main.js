const yearSpan=document.getElementById('year');if(yearSpan)yearSpan.textContent=new Date().getFullYear();
document.querySelectorAll('.reveal').forEach((el)=>{const io=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('in-view');});},{threshold:.15});io.observe(el);});
const lightbox=document.getElementById('lightbox');const lightboxImg=document.getElementById('lightbox-image');
document.querySelectorAll('[data-lightbox]').forEach((img)=>{img.addEventListener('click',()=>{if(!lightbox||!lightboxImg)return;lightboxImg.src=img.getAttribute('src');lightboxImg.alt=img.getAttribute('alt')||'Gallery photo';lightbox.classList.add('open');});});
lightbox?.addEventListener('click',(e)=>{if(e.target===lightbox||e.target.classList.contains('close-x'))lightbox.classList.remove('open');});
const photosModal=document.getElementById('photos-modal');const openPhotos=document.getElementById('open-photos');openPhotos?.addEventListener('click',()=>photosModal?.classList.add('open'));photosModal?.addEventListener('click',(e)=>{if(e.target===photosModal||e.target.classList.contains('close-x'))photosModal.classList.remove('open');});
document.querySelectorAll('.accordion-trigger').forEach((btn)=>{btn.addEventListener('click',()=>{btn.closest('.accordion-item')?.classList.toggle('open');});});
