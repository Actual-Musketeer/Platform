import { browser, by, element, promise } from 'protractor';

export class AppPage {
    public navigateTo(): promise.Promise<string> {
        return browser.get('/');
    }

    public getParagraphText(): promise.Promise<string> {
        return element(by.css('app-root h1')).getText();
    }
}
