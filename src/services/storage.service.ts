import { Injectable } from '@angular/core';
import { LocalUser } from 'src/models/local_user';
import { STORAGE_KEYS} from "../config/storage_keys.config";
import { jsonpCallbackContext } from '@angular/common/http/src/module';




@Injectable()
export class StorageService{

    getLocalUser() : LocalUser{
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null){
            return null;
        }
        else {
            return JSON.parse(usr);
        }

    }

    setLocalUser(obj : LocalUser){
        if (obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }

    }
}