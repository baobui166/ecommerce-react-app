import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/contextAuth";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./features/authentication/LoginForm";
import PageNotFound from "./page/PageNotFound";
import { Toaster } from "react-hot-toast";
import AppLayoutUser from "./ui/AppLayoutUser";
import Home from "./page/Home";
import Product from "./page/Product";
import Detail from "./page/Detail";
import Liked from "./page/Liked";
import Cart from "./page/Cart";

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
            </Route>

            <Route path="/login" element={<LoginForm />} />
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
