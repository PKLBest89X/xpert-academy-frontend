import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "store";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: true,
            retry: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <App />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
