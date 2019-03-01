// JS goes here


//NAV BAR

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }



  //TABS


class TabLink {
    constructor(element) {

      this.element = element;
      this.data = this.element.dataset.tab;
      this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.item); 
      this.element.addEventListener('click', () => {this.select()})
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link'); 
      links.forEach( link => {
        link.classList.remove('tabs-link-selected')
      });
  
      this.element.classList.add('tabs-link-selected');
      this.tabItem.select();
    }
  }
  
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      this.element.classList.add('tabs-item-selected');
    }
  }

  const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));