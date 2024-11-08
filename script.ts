
let ref_section = document.getElementById("ref")
let ref_btn = document.getElementById("ref_btn")

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})

//========experience--------------
let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle('hide')
})

//------------about----------
let abt_section = document.getElementById('abt')
let abt_btn = document.getElementById('abt_btn')

abt_btn?.addEventListener('click', ()=>{
    abt_section!.classList.toggle('hide')
})

//-------------language-----
let lang_section = document.getElementById('lang')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
    lang_section!.classList.toggle('hide')
})
//------------skills----------
let skl_section = document.getElementById('skl')
let skl_btn = document.getElementById('skl_btn')

skl_btn?.addEventListener('click', ()=>{
    skl_section!.classList.toggle('hide')
})
//------------education-----------\
let edu_section = document.getElementById('edu')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', ()=>{
    edu_section!.classList.toggle('hide')
})
//----------contact----------
let con_section = document.getElementById('con')
let con_btn = document.getElementById('con_btn')

con_btn?.addEventListener('click', ()=>{
    con_section!.classList.toggle('hide')
})

let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
    window.print()
})
