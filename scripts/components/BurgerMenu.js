class BurgerMenu {
  selectors = {
    root: '[data-js-header]',
    menu: '[data-js-menu]',
    overlay: '[data-js-overlay]',
    burgerButton: '[data-js-burger-button]',
  };

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.menuElement = this.rootElement.querySelector(this.selectors.menu);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay,
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton,
    );
    this.init();
  }

  onClickBurgerButton = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.menuElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  onClickOverlay = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    this.menuElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  onClickMenu(e) {
    if (e.target.closest('a')) {
      this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
      this.overlayElement.classList.toggle(this.stateClasses.isActive);
      this.menuElement.classList.toggle(this.stateClasses.isActive);
      document.documentElement.classList.toggle(this.stateClasses.isLock);
    }
  }

  init() {
    this.burgerButtonElement.addEventListener(
      'click',
      this.onClickBurgerButton,
    );

    this.overlayElement.addEventListener('click', this.onClickOverlay);
    this.menuElement.addEventListener('click', (e) => this.onClickMenu(e));
  }
}

export default BurgerMenu;
