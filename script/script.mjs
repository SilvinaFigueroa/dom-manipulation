// Part 1: Getting Started

//Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main')[0]

// Get element(s) retrieve an array of elements, so ve need to refer to the first element using [0]
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>"

// Another option to include the text on the mainEl
// let head = document.createElement("h1")
// head.textContent = "Dom Manipulation"
// mainEl[0].appendChild(head)


mainEl.classList.add('flex-ctr')


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
  if (e.target instanceof HTMLAnchorElement) {
    //Get all the <a> elements on top menu
    const topLinks = topMenuEl.querySelectorAll('a');
    // remove active class from the links
    topLinks.forEach(link => link.classList.remove('active'));

    // add active class to the link clicked (target)
    e.target.classList.toggle('active')

    let clickedLink = e.target.textContent;

    // Find the text of the link clicked (event target) on the array obj of menuLinks
    let menuObj = null
    for (const index in menuLinks) {
      if (menuLinks[index].text === clickedLink) {
        // if found, we cache the variable to use it on the buildSubmenu function
        menuObj = menuLinks[index];
        // we use break because we don't need to continue looping after we found the link (unique values)
        break;
      }
    }
    //If the menu link was found and it has sublinks
    if (menuObj && (menuObj.subLinks)) {
      //Show menu
      subMenuEl.style.top = "100%";
      // Create submenu
      buildSubmenu(menuObj.subLinks)
    }
    else {
      subMenuEl.style.top = "0"
      subMenuEl.innerHTML = ''
    }
  }
});

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  // If the target is not an <a>
  if (!(e.target instanceof HTMLAnchorElement)) {
    return
  }

    console.log(`Link clicked sub menu ${e.target}`)
    subMenuEl.style.top = "0"
    // find the <a> on top links and remove the active state
    const topLinks = topMenuEl.querySelectorAll('a');
    topLinks.forEach(link => link.classList.remove('active'))
    console.log(`Text clicked sub menu ${e.target.text}`)
    // new content of the mainEl should be set to the name of the <a> clicked on submenu
    let newContent = (e.target.text).toUpperCase();

    mainEl.innerHTML = `<h1>${newContent}</h1>`

});



for (const item of menuLinks) {
  // for each top menu
  let uplink = document.createElement("a")
  uplink.textContent = item.text
  uplink.setAttribute("href", item.href)
  topMenuEl.append(uplink)
}

function buildSubmenu(links) {
  // clear submenu content  
  subMenuEl.innerHTML = '';

  for (const item of links) {
    let link = document.createElement("a")
    link.textContent = item.text
    link.setAttribute("href", item.href)
    subMenuEl.appendChild(link)
  }
}


