// Part 1: Getting Started

//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main')

// Get element(s) retrieve an array of elements, so ve need to refer to the first element using [0]
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
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


// DOM Manipulation (Part Two)
// Part 3: Creating the Submenu

let subMenuEl = document.getElementById("sub-menu")
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

subMenuEl.classList.add('flex-around');
subMenuEl.style.position = ('absolute');
subMenuEl.style.top = ('0');

// Part 4: Adding Menu Interaction


topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  // if (e.target.tagName === "A") { // I was using the comparison with "a" and it didn't work.
  // I found that all the tagName are in UPPERCASE. After researching, it seems it's better to compare witg HTML instance of
    if(e.target instanceof HTMLAnchorElement){
    //Get all the <a> elements on top menu
    const menuLinks = topMenuEl.querySelectorAll('a'); 
    // remove active class from the links
    menuLinks.forEach(link => link.classList.remove('active'));

    // add active class to the link clicked (target)
    e.target.classList.toggle('active')
    
    if(e.target.subLinks){
      subMenuEl.style.top = "100%";}
      let linkObj = e.target;
      buildSubmenu(menuLinks.subLinks,linkObj)
  }
  return;
});

for (const item of menuLinks) {
  // for each top menu
  let uplink = document.createElement("a")
  uplink.textContent = item.text
  uplink.setAttribute("href", item.href)
  topMenuEl.append(uplink)
}

function buildSubmenu(sublinks){
  // clear submenu content  
  subMenuEl.innerHTML = '';
      for (const each of sublinks) {
        let link = document.createElement("a")
        link.textContent = each.text
        link.setAttribute("href", each.href)
        subMenuEl.appendChild(link)
      }
}

