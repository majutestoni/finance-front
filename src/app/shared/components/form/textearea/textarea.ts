import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textarea.html',
  styleUrls: ['./textarea.scss']
})
export class TextareaComponent {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() rows: number = 3;
  @Input() model: string = '';
  @Input() className: string = '';
  @Input() invalid: boolean = false;

}