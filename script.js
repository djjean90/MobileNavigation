const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');

listItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();
    item.classList.add('active');
    contents[i].classList.add('show');
  });
});

function hideAllContents() {
  contents.forEach((item) => {
    item.classList.remove('show');
  });
}

function hideAllItems() {
  listItems.forEach((item) => {
    item.classList.remove('active');
  });
}
