import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private taskModal: boolean = false;
  public isButtonLoad: boolean = false;

  public taskForm: FormGroup = this.formBuilder.group({
    taskTitle: [''],
    taskDescription: ['']
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  isModalVisible() {
    return this.taskModal
  }

  openModal() {
    const open: boolean = true
    this.taskModal = open
  }

  closeModal() {
    const close: boolean = false
    this.taskModal = close
  }

  startCardDrag() {
    console.log()
  }

  handleSubmit() {
    this.isButtonLoad = true
  }
}
