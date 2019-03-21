import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ITask } from '../common/interfaces/task.interface';
import { AuthService } from '../common/services/auth.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
    @Input() taskItem: ITask;
    @Input() taskIndex;
    @Output() deleteTask = new EventEmitter<number>();

	get runChangeDetection() {
		console.log('Checking the view');
		return;
	}

    constructor(private auth: AuthService) {}

    onDeleteTask(id: number) {
        if (!this.auth.isAuth()) {
            return;
        }
        this.deleteTask.emit(id);
    }
}
