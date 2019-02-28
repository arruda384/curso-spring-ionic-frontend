import { Injectable } from '@angular/core';


@Injectable()
export class StorageService {

   private _LocalUser;
    public get LocalUser() {
        return this._LocalUser;
    }
    public set LocalUser(value) {
        this._LocalUser = value;
    }

}