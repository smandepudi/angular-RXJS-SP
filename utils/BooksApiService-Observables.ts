/** *
 * This function is to fake the API requests as observables.
 *
 * DO NOT MODIFY THIS FILE
 */

import { Observable, delay } from 'rxjs';
import { of } from 'rxjs';

export class BookApiService {
	/**
	 * Gets a list of available book IDs.
	 * e.g.
	 * [
	 *   {
	 *     bookId: '0001',
	 *   },
	 * ]
	 */
	static getAll(): Observable<any> {
		return of([
			{
				bookId: '0001'
			},
			{
				bookId: '0002'
			},
			{
				bookId: '0003'
			},
			{
				bookId: '0004'
			},
			{
				bookId: '0005'
			},
			{
				bookId: '0006'
			},
			{
				bookId: '0007'
			}
		]).pipe(delay(Math.random() * 1000));
	}

	/**
	 * Gets the book title for the specified book id
	 */
	static getBookTitle(bookId: string): Observable<any> {
		const title =
			bookId === '0001'
				? {
						title: 'Book 1'
				  }
				: bookId === '0002'
				? {
						title: 'The sequel'
				  }
				: bookId === '0003'
				? {
						title: 'Third and final book'
				  }
				: bookId === '0004'
				? {
						title: 'Fourth book. New beginings'
				  }
				: bookId === '0005'
				? {
						title: 'The second sequel'
				  }
				: bookId === '0006'
				? {
						title: 'The last chapter of the sequel'
				  }
				: bookId === '0007'
				? {
						title: '...The Prequel'
				  }
				: '';
		return of(title).pipe(delay(Math.random() * 1000));
	}

	/**
	 * Gets the book author for the specified book id
	 */
	static getBookAuthor(bookId: string): Observable<any> {
		return of({ author: `Author ${bookId}` }).pipe(delay(Math.random() * 1000));
	}
}
