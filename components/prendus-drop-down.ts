export class PrendusDropDown extends Polymer.Element{
	public buttonType: string;
	public buttonText: string;
	public buttonTitle: string;
	public classes: string;
	public querySelector: any;

  static get is() { return 'prendus-drop-down'; }
  static get properties() {
    return {
			classes: {
				type: String,
				value: 'prendus-button',
				computed: '_computeClasses(buttonType)'
			}
		};
  }

	_computeClasses(type: string): string {
		return 'prendus-button prendus-button--' + type;
	}

	toggleMenu(e: any): void {
		const items: any = this.querySelector('#drop-down');
		items.toggle();
	}

	toggleMenuWithKeyboard(e: any): void {
		if(e.keyCode === 13 || e.keyCode === 32) {
			e.preventDefault();
			this.toggleMenu(e);
		}
	}

}

window.customElements.define(PrendusDropDown.is, PrendusDropDown);
