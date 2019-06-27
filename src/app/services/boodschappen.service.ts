import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Boodschap} from "../models/Boodschap";
import {BoodschapResponse} from "../models/BoodschapResponse";
import {pluck} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BoodschappenService {

  constructor(private http: HttpClient) {
  }

  getBoodschappen(): Observable<Boodschap[]> {
    return this.http.get<BoodschapResponse[]>('/api/boodschap/search/findAllByOrderByCompletedAsc')
      .pipe(pluck<any, Boodschap[]>('_embedded', 'boodschaps'));
  }

  addBoodschappen(boodschap: Boodschap): Observable<Boodschap> {
    return this.http.post<Boodschap>('/api/boodschap', boodschap);
  }

  deleteBoodschap(boodschap: Boodschap): Observable<Boodschap> {
    return this.http.delete<Boodschap>(boodschap._links.self.href);
  }

  completeBoodschap(boodschap: Boodschap): Observable<Boodschap> {
    return this.http.put<Boodschap>(boodschap._links.self.href, boodschap);
  }
}
