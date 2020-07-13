import { useState } from 'react';

enum IngredientName {
    Bread = 'bread',
    Cheese = 'cheese',
    Ham = 'ham',
}

type Stock = {
    [key in IngredientName]?: number;
};

enum SandwichName {
    Ham = 'Ham',
    Cheese = 'Cheese',
    HamAndCheese = 'Ham and Cheese',
}

interface Sandwich {
    name: SandwichName;
    ingredients: {
        name: IngredientName;
        quantity: number;
    }[];
}

const hamSandwich: Sandwich = {
    name: SandwichName.Ham,
    ingredients: [
        { name: IngredientName.Bread, quantity: 2 },
        { name: IngredientName.Ham, quantity: 1 },
    ],
};

const cheeseSandwich: Sandwich = {
    name: SandwichName.Cheese,
    ingredients: [
        { name: IngredientName.Bread, quantity: 2 },
        { name: IngredientName.Cheese, quantity: 1 },
    ],
};

const hamAndCheeseSandwich: Sandwich = {
    name: SandwichName.HamAndCheese,
    ingredients: [
        { name: IngredientName.Bread, quantity: 2 },
        { name: IngredientName.Ham, quantity: 1 },
        { name: IngredientName.Cheese, quantity: 1 },
    ],
};

const allSandwiches = [hamSandwich, cheeseSandwich, hamAndCheeseSandwich];

const baseStock: Stock = {
    bread: 0,
    ham: 0,
    cheese: 0,
};

interface SandwichShopPayload {
    sandwiches: { name: SandwichName; available: boolean }[];
    sell(sandwichName: SandwichName): boolean;
    restock(stock: Stock): void;
}

export const useSandwichShop = (initialStock: Stock = {}): SandwichShopPayload => {
    const [stock, setStock] = useState({ ...baseStock, ...initialStock });

    const restock = (newStock: Stock): void => {
        setStock((currentStock) => {
            const allIngredients = [...new Set(Object.keys(currentStock).concat(Object.keys(newStock)))];
            const combinedStock: Stock = {};

            allIngredients.forEach((ingredient) => {
                combinedStock[ingredient] = currentStock[ingredient] + newStock[ingredient];
            });

            return combinedStock;
        });
    };

    const sandwiches = allSandwiches.map((sandwich) => {
        const { ingredients, name } = sandwich;
        let available = true;

        ingredients.forEach(({ name, quantity }) => {
            available = available && stock[name] >= quantity;
        });

        return { name, available };
    });

    const sell = (sandwichName: SandwichName): boolean => {
        const { ingredients } = allSandwiches.find(({ name }) => name === sandwichName);

        const projectedStock = {
            ...stock,
        };

        ingredients.forEach(({ name, quantity }) => {
            projectedStock[name] -= quantity;
        });

        const sellable = Object.keys(projectedStock).every((ingredient) => projectedStock[ingredient] >= 0);

        if (sellable) {
            setStock(projectedStock);
        }

        return sellable;
    };

    return {
        restock,
        sandwiches,
        sell,
    };
};
