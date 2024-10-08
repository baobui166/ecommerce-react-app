import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/contextAuth";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./page/PageNotFound";
import { Toaster } from "react-hot-toast";
import AppLayoutUser from "./ui/AppLayoutUser";
import Home from "./page/Home";
import Product from "./page/Product";
import Detail from "./page/Detail";
import Liked from "./page/Liked";
import Cart from "./page/Cart";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Checkout from "./page/Checkout";
import CustomerService from "./page/CustomerService";
import Search from "./page/Search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 100,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayoutUser />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/product/:id" element={<Detail />} />
              <Route path="/liked" element={<Liked />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sale" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/customerservice" element={<CustomerService />} />
              <Route path="/search/:query" element={<Search />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: " 500px",
              padding: "24px 16px",
              backgroundcolor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
