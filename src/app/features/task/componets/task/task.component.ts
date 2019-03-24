import { ActivatedRoute, Router } from '@angular/router';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
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
export class TaskComponent implements OnInit {
    @Input() taskItem: ITask;
    @Input() taskIndex;
    @Output() deleteTask = new EventEmitter<number>();
    test = 'test';

    constructor(private auth: AuthService,
                private router: Router,
                private route: ActivatedRoute,
                private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        setTimeout(() => {
            this.test = 'new test';
            this.cdr.markForCheck();
        }, 3000);
    }

    click() {

    }

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
