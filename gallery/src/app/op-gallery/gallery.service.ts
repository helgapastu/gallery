import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class GalleryService {
  constructor(private http: HttpClient) { }
  url: string = 'https://api.flickr.com/services/rest';

  private cachedResults: any[] = [];

  sortType: string = 'default';

  getPhotos(searchText: string): Observable<any> {
    console.log(searchText);

    const httpParams = {
      params: new HttpParams()
    };

    httpParams.params = httpParams.params
      .append('method', 'flickr.photos.search')
      .append('format', 'json')
      .append('api_key', '80c0aff65590f93ed177cb65805fbec7')
      .append('action', 'opensearch')
      .append('text', searchText)
      .append('per_page', '30')
      .append('media', 'photos')
      .append('content_type', '1')
      .append('format', 'json')
      .append('nojsoncallback', '1');

    return this.http.get<any>(
      'https://api.flickr.com/services/rest',
      httpParams
    ).pipe(map(response => {
      this.cachedResults = [];
      let jsonRes = response.photos.photo;

      for (let i = 0; i < jsonRes.length; i++) {
        let farm = jsonRes[i].farm;
        let id = jsonRes[i].id;
        let secret = jsonRes[i].secret;
        let server = jsonRes[i].server;
        let title = jsonRes[i].title;

        let photoUrl = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg';
        this.cachedResults.push({ url: photoUrl, title: title, id: id });
      }

      return this.cachedResults
    }
    ))
  };

  public getCachedResults(): any[] {
    return this.cachedResults;
  }

  getById(id: string) {
    return this.cachedResults.find(p => p.id === id)
  }

  goToNextPhoto(id: string) {
    const index = this.cachedResults.findIndex(photo => photo.id === id);

    if (index < this.cachedResults.length - 1) {
      return this.cachedResults[index + 1]
    } else {
      return this.cachedResults[index]
    }
  }

  goToPreviousPhoto(id: string) {
    const index = this.cachedResults.findIndex(photo => photo.id === id);

    if (index !== 0) {
      return this.cachedResults[index - 1]
    } else {
      return this.cachedResults[index]
    }
  }
}