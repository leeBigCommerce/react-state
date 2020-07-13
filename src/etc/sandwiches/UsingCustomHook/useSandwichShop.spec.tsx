import { renderHook, act } from '@testing-library/react-hooks';
import { useSandwichShop } from './useSandwichShop';

// TODO: re-organise as per video of the week suggestions?

describe('useSandwichShop', () => {
    describe('sandwiches', () => {
        it('contains no available sandwiches when insufficient stock is provided', () => {
            const { result } = renderHook(() => useSandwichShop({}));

            expect(result.current.sandwiches).toStrictEqual([
                {
                    available: false,
                    name: 'Ham',
                },
                {
                    available: false,
                    name: 'Cheese',
                },
                {
                    available: false,
                    name: 'Ham and Cheese',
                },
            ]);
        });

        it('contains available cheese sandwiches when sufficient stock is provided', () => {
            const { result } = renderHook(() => useSandwichShop({ bread: 2, cheese: 1 }));

            expect(result.current.sandwiches).toStrictEqual(
                expect.arrayContaining([
                    {
                        available: true,
                        name: 'Cheese',
                    },
                ]),
            );
        });

        it('contains available ham sandwiches when sufficient stock is provided', () => {
            const { result } = renderHook(() => useSandwichShop({ bread: 2, ham: 1 }));

            expect(result.current.sandwiches).toStrictEqual(
                expect.arrayContaining([
                    {
                        available: true,
                        name: 'Ham',
                    },
                ]),
            );
        });

        it('contains available Ham and Cheese sandwiches when sufficient stock is provided', () => {
            const { result } = renderHook(() => useSandwichShop({ bread: 2, ham: 1, cheese: 1 }));

            expect(result.current.sandwiches).toStrictEqual(
                expect.arrayContaining([
                    {
                        available: true,
                        name: 'Ham and Cheese',
                    },
                ]),
            );
        });
    });

    describe('sell', () => {
        it('returns false when you try to buy a sandwich from a shop with insufficient stock', () => {
            const { result } = renderHook(() => useSandwichShop({}));

            expect.assertions(result.current.sandwiches.length);

            result.current.sandwiches.forEach(({ name }) => {
                expect(result.current.sell(name)).toBe(false);
            });
        });

        it('returns true when you try to buy an available Ham sandwich', () => {
            const { result } = renderHook(() => useSandwichShop({ bread: 2, ham: 1 }));

            const hamSandwitch = result.current.sandwiches.find(({ name }) => name === 'Ham');

            act(() => {
                expect(result.current.sell(hamSandwitch.name)).toBe(true);
            });
        });

        it('returns true when you try to buy an available cheese sandwich', () => {
            const { result } = renderHook(() => useSandwichShop({ bread: 2, cheese: 1 }));

            const cheeseSandwitch = result.current.sandwiches.find(({ name }) => name === 'Cheese');

            act(() => {
                expect(result.current.sell(cheeseSandwitch.name)).toBe(true);
            });
        });

        it('returns true when you try to buy an available Ham and Cheese sandwich', () => {
            const { result } = renderHook(() => useSandwichShop({ bread: 2, ham: 1, cheese: 1 }));

            const hamAndCheeseSandwitch = result.current.sandwiches.find(({ name }) => name === 'Ham and Cheese');

            act(() => {
                expect(result.current.sell(hamAndCheeseSandwitch.name)).toBe(true);
            });
        });
    });

    describe('restock', () => {
        it('allows the sale of sandwiches which were previously unavailable due to insufficient stock', () => {
            const { result } = renderHook(() => useSandwichShop({}));

            expect.assertions(result.current.sandwiches.length * 2);

            result.current.sandwiches.forEach(({ name }) => {
                expect(result.current.sell(name)).toBe(false);
            });

            act(() => {
                result.current.restock({
                    bread: 6,
                    ham: 2,
                    cheese: 2,
                });
            });

            act(() => {
                result.current.sandwiches.forEach(({ name }) => {
                    expect(result.current.sell(name)).toBe(true);
                });
            });
        });
    });
});
