import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from "@angular/common/http";
import { Observable} from "rxjs";
import { StorageService } from 'src/services/storage.service';
import { API_CONFIG } from 'src/config/api.config';
 
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  
    constructor(public storage: StorageService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        alert("Auth-interceptor");

        let localUser = this.storage.getLocalUser();
        let N = API_CONFIG.baseUrl.length;
        let requestToAPI = request.url.substring(0,N) == API_CONFIG.baseUrl;
        alert(N);
        alert(requestToAPI);
        

        if(localUser && requestToAPI){
            alert("entrou no IF")
            const authReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        }
        else{

            alert("else");
            return next.handle(request)

        }

        
    }
  
} 


 
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor,
    multi: true,
};