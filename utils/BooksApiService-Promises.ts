/** *
 * This function is to fake the API requests as promises.
 *
 * DO NOT MODIFY THIS FILE
 */

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
	static getAll(): Promise<any> {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve([
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
				]);
			}, Math.random() * 1000);
		});
	}

	/**
	 * Gets the book title for the specified book id
	 */
	static getBookTitle(bookId: string): Promise<any> {
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
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(title);
			}, Math.random() * 1000);
		});
	}

	/**
	 * Gets the book author for the specified book id
	 */
	static getBookAuthor(bookId: string): Promise<any> {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({ author: `Author ${bookId}` });
			}, Math.random() * 1000);
		});
	}
}
