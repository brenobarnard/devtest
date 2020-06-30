import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class NavigationProvider {

    currentPage = new BehaviorSubject<string>('');
    public $currentPage = this.currentPage.asObservable();
    previousPage = new BehaviorSubject<string>('');
    public $previousPage = this.previousPage.asObservable();

    constructor () {}

    setCurrentPage (page: string) {
        console.log('Current Page set To: ', page);
        this.currentPage.next(page);
    }

    setPreviousPage (page: string) {
        console.log('Previous Page set To: ', page);
        this.previousPage.next(page);
    }
}