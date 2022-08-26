/** *
 * Utility functions for displaying the book list.
 *
 * DO NOT MODIFY THIS FILE.
 */
import { Observable, isObservable, firstValueFrom } from 'rxjs';
import { Book } from './Book';

/**
 * Updates the list of books in the index.html file. This function
 * will accept either a promise for the book list, or an observable
 * for the book list. Only the first value emitted from the observable
 * will be displayed.
 */
export const updateBooksList = async (
  input: Promise<Array<Book>> | Observable<Array<Book>>
) => {
  let booklist: Array<Book>;
  if (isObservable(input)) {
    booklist = await firstValueFrom(input);
  } else {
    booklist = await input;
  }

  document.getElementById('booksResponse').innerHTML = JSON.stringify(
    booklist,
    null,
    ' '
  );
};
