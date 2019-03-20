import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

	form: FormGroup;

	constructor(public router: Router) {}

	ngOnInit() {
		this.form = new FormGroup({
			taskName: new FormControl('', Validators.required),
			taskEmail: new FormControl('', [Validators.required, Validators.email]),
			taskDesc: new FormControl('', [Validators.required])
		});
	}

	onSubmit() {
		const formItem = this.form.value,
            formData = JSON.parse(localStorage.getItem('tasks'));

		formItem.id = Math.floor(Math.random() * 10000);
		formData.push(formItem);
		localStorage.setItem('tasks', JSON.stringify(formData));
		this.form.reset();
		this.router.navigate(['task-list']);
	}
}
