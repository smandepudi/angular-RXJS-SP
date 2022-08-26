/** *
 *
 * Exercise 2: Asynchronous Javascript
 *
 * Demonstrate your understanding of Asynchronous tasks by implementing a
 * function to aggregate book data from multiple Asynchronous sources into a
 * single JSON object.
 */

import { forkJoin, map, Observable, switchMap, of, from, toArray } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Book } from '../utils/Book';

/**
 * NOTE: Import the service based on whether you want to use Observables or promises
 */
import { updateBooksList } from '../utils/UpdateList';

import { BookApiService } from '../utils/BooksApiService-Observables';

function bookTitle(id): Observable<any> {
  return BookApiService.getBookTitle(id);
}
function bookAuthor(id): Observable<any> {
  return BookApiService.getBookAuthor(id);
}
function getAllBooks(): Observable<Array<Book>> {
  return BookApiService.getAll().pipe(
    mergeMap((result: any) => {
      let bookList = [...result];

      const requests = bookList.map((item) => {
        return forkJoin([
          BookApiService.getBookAuthor(item.bookId),
          BookApiService.getBookTitle(item.bookId),
        ]).pipe(
          map(([authorInfo, titleInfo]) => {
            return {
              id: item.bookId,
              title: titleInfo.title,
              author: authorInfo.author,
            };
          })
        );
      });
      // return r;
      return forkJoin(requests);
    })
  );
}

// Only update the Book list display once.
updateBooksList(getAllBooks());
