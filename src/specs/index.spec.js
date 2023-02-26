import config from '../../framework/config/config';
import { user, book } from '../../framework/services/user';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

describe('POST /bookstore/v1/books', () => {
  test('Создание книги', async () => {
    const token = await user.tokenCache();
    const res = await book.create_book(
      { userId: config.userID, collectionOfIsbns: [{ isbn: config.isbn }] },
      token
    );
    expect(typeof token).toBe('string');
    expect(typeof res.body).toBe('object');
    expect(res.body).toMatchSchema(config.schema);
    expect(res.status).toEqual(201);
  });
});

describe('GET /bookstore/v1/book', () => {
  test('Получении информации о книге', async () => {
    const res = await book.info_book();
    expect(typeof res.body).toBe('object');
    expect(res.status).toEqual(200);
    expect(res.body).toMatchSnapshot({
      pages: expect.any(Number),
    });
  });

  it.each([config.isbn, config.new_isbn])(
    `параметризированный тест c массивом данных`,
    async () => {
      const res = await book.info_book();
      expect(typeof res.body).toBe('object');
      expect(res.status).toEqual(200);
    }
  );
});

describe('PUT /bookstore/v1/books/{ISBN}', () => {
  test('Обновление книги', async () => {
    const res = await book.update_book({
      userId: config.userID,
      isbn: config.new_isbn,
    });
    expect(res.body.books[0].isbn).toBe('9781449325862');
    expect(res.status).toEqual(200);
  });
});

describe('DELETE /bookstore/v1/book', () => {
  test('Удаление книги parametric test', async () => {
    const res = await book.delete_book({
      isbn: config.new_isbn,
      userId: config.userID,
    });
    expect(res.status).toEqual(204);
  });
});
