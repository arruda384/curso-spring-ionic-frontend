import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
    HttpInterceptor,
    HTTP_INTERCEPTORS
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  import {
    Router
  } from '@angular/router';
  import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
   
constructor(private router: Router, public toastController: ToastController) {}

intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercept");

       /* const token = localStorage.getItem('token');
      
        if (token) {
          
          request = request.clone({
            setHeaders: {
              'Authorization': token
            }
          });
        }
      
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
            setHeaders: {
              'content-type': 'application/json'
            }
          });
        }
      
        request = request.clone({
          headers: request.headers.set('Accept', 'application/json')
        });
      */
        return next.handle(request).pipe(       
          catchError((error => {   

            let errorObj = error;         
            if (errorObj.error) {
                errorObj = errorObj.error;
              //  this.presentToast('Acesso negado');
            }  
            if(!errorObj.status){
                //case 403: this.handle403();
                errorObj = JSON.parse(errorObj);
                //this.router.navigate(['/home']);
            }               
            console.log("Erro detectado pelo interceptor");
            console.log(errorObj);    
            return throwError(errorObj);
          }))) as any;

      }

      handle403(){
        this.handle403.arguments.localStorage.setLocalUser(null);
    }

      
    
      async presentToast(msg) {
          
        const toast = await this.toastController.create({
          message: msg,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }

      
      
    }
    
   