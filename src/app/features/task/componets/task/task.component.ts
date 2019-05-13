import { ActivatedRoute, Router } from '@angular/router';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import { ITask } from '../../interfaces/task.interface';
import { AuthService } from '../../../../common/services/auth.service';

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

    constructor(private auth: AuthService,
                private router: Router,
                private route: ActivatedRoute) {}

    toEdit() {
        this.router.navigate([this.taskItem.id, 'edit'], {relativeTo: this.route});
    }

    onDeleteTask(id: number) {
        if (!this.auth.isLoggedIn.getValue()) {
            return;
        }
        this.deleteTask.emit(id);
    }
}
