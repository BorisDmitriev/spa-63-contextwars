import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("App", () => {
    test("renders 404 page when invalid URL is entered", () => {
        window.history.pushState({}, "Test page", "/invalid-url");
        render(<App />);
        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });

    test("renders navbar on every page", () => {
        render(<App />);
        const navbar = screen.getByRole("navigation");
        expect(navbar).toBeInTheDocument();
    });

    test("adds active class to selected link in navbar", () => {
        render(<App />);
        fireEvent.click(screen.getByText(/about/i));
        const aboutLink = screen.getByText(/about/i);
        expect(aboutLink).toHaveClass("active");

        fireEvent.click(screen.getByText(/home/i));
        const homeLink = screen.getByText(/home/i);
        expect(homeLink).toHaveClass("active");
    });

    test("renders index page on first load", () => {
        render(<App />);
        expect(
            screen.getByText(/startseite/i) ||
                screen.getByText(/home/i) ||
                screen.getByText(/page/i)
        ).toBeInTheDocument();
    });
});
