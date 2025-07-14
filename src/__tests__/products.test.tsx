import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
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
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }},
        {
            id: 1,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 1,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 1,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }, {
            id: 1,
            title: 'test',
            price: 111,
            description: 'test',
            category: 'menswear',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg&w=640&q=75',
            rating: { rate: 3, count: 120 }
        }]);
    }
}));

it("renders grid layout with 5 columns", async () => {
    render(<Products />);

    const gridLayout = screen.getByRole("grid");
    expect(gridLayout).toBeInTheDocument();
  
});

it("redirects to product detail page", async () => {
    render(<Products />);

    const productTile = await screen.findByRole("link");
    fireEvent.click(productTile);
    const productDetail = await screen.findByText("Fjallraven - Foldsack No. 1 Backpack");
    expect(productDetail).toBeInTheDocument();
});