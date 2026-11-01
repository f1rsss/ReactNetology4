import Cart from "./Cart";
import Movie from "./domain/Movie";

describe('Cart', () => {
    let cart: Cart;
    let movie1: Movie;
    let movie2: Movie;

    beforeEach(() => {
        cart = new Cart();
        movie1 = new Movie(1, 'Интерстеллар', 500, 2014, 'США', 'Слоган', 'Фантастика', 169);
        movie2 = new Movie(2, 'Начало', 300, 2010, 'США', 'Слоган', 'Триллер', 148);
    });

    test('должен проверять товар и отдавать список товаров', () => {
        cart.add(movie1);
        expect(cart.items).toEqual([movie1]);
    });

    test('Должен считать суммарную стоимость без скидки', () => {
        cart.add(movie1);
        cart.add(movie2);
        expect(cart.getTotalPrice()).toBe(800);
    });

    test('должен считать суммарную стоимость с учетом скидки', () => {
        cart.add(movie1);
        cart.add(movie2);
        // Общая сумма 800, скидка 100. Ожидаем 700
        expect(cart.getTotalPriceWithDiscount(100)).toBe(700);
    });

    test('Должен удалять товар по id', () => {
        cart.add(movie1);
        cart.add(movie2);
        cart.removeById(1);
        expect(cart.items).toEqual([movie2]);
    });
});