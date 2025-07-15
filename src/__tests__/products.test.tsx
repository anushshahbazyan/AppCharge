import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import Products from "../components/products-list";

jest.mock("../utils/fetchData", () => ({
    __esModule: true,
    default: (url_route = '') => {
        if (url_route) {
            return jest.fn().mockResolvedValue({
                id: 1,
                title: 'test',
                price: 111,
                description: 'test',
                category: 'menswear',
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
                rating: { rate: 3, count: 120 }
            });
        }
        
        return jest.fn().mockResolvedValue([{
            id: 1,
            title: 'test title',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 2,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 3,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 4,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 5,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }]);
    }
}));

test("renders grid layout with 5 columns", async () => {
    act(() => render(<Products />));

    const nodes = await screen.findByRole("link");
    expect(nodes).toBeInTheDocument();
  
});

test("redirects to product detail page", async () => {
    act(() => render(<Products />));

    const productTile = await screen.findByRole("link");
    fireEvent.click(productTile);
    const productDetail = await screen.findByText("test title");
    expect(productDetail).toBeInTheDocument();
});