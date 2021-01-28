/** Core Packages */
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

/** Packages */
import { filter, map, mergeMap } from 'rxjs/operators';

const TITLE = 'Card';
const SEPERATOR = ' |';

@Injectable({
    providedIn: 'root',
})
export class TitleService {
    titleName = '';
    constructor(private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router) { }

    onChangeRouteTitle() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((data) => {
                    while (data.firstChild) data = data.firstChild;
                    return data;
                }),
                filter((route) => route.outlet == 'primary'),
                mergeMap((route) => route.data),
                map((data) => {
                    if (data.title) {
                        return data.title;
                    } else {
                        const currentUrl = this.router.url.substr(1);
                        const currentUrlSplit = currentUrl.split('?');
                        const levelSplit = currentUrlSplit[0].split('/');
                        // console.log(levelSplit[0]);
                        if (levelSplit[0] == '') {
                            levelSplit[0] = 'Login';
                        } else {
                            levelSplit[0] = levelSplit[0];
                        }
                        return `${SEPERATOR} ${this.convertCase(levelSplit[0])}`;
                    }
                })
            )
            .subscribe((event) => this.titleService.setTitle(`${TITLE}${event}`));
    }

    private convertCase(pathString: string) {
        // console.log(pathString);
        if (!pathString) return pathString;
        this.titleName = pathString.charAt(0).toUpperCase() + pathString.slice(1);
        // console.log(this.titleName);
        return `${this.titleName}`;
    }
}