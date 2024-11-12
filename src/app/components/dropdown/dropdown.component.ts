import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  selectedItem: string = '';
  @Input() items: string[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      (elem as HTMLElement)?.blur();
    }
  };
  updateSelectedItem(item: string) {
    this.itemSelected.emit(item); // Emit the item to the parent
    this.handleClick(); // Close the dropdown
  }
}
