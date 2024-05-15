// Part 1: Getting Started

//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main')

// Get elements retrieve an array of elements, so ve need to refer to the first element using [0]
mainEl[0].style.backgroundColor = "var(--main-bg)"; 

mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>"

// Another option to include the text on the mainEl
// let head = document.createElement("h1")
// head.textContent = "Dom Manipulation"
// mainEl[0].appendChild(head)


mainEl[0].classList.add('flex-ctr')


// Part 2: Creating a Menu Bar

let topMenuEl = document.getElementById("top-menu")
console.log(topMenuEl)

topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')

// Part 3: Adding Menu Buttons


var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


for (const menu in menuLinks){
    let link = document.createElement("a")
    link.setAttribute("href",menuLinks[menu].href)

    link.textContent = (menuLinks[menu].text)

    topMenuEl.append(link)
}


// Part 4: Adding Interactivity


