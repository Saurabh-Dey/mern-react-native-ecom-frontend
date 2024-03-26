import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey =
  "pk_test_51OuG9ySGZTydVo7YjhiLcJum1si7hW7QRO9BkEPIXlR9DSUpRH0h7jdIM3HQeIMdyIN7TSWfx4d9FIYG3UeVFjRp00DI6NvQ7c";

const App = () => {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="sourav-react-native-ecom"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
};

export default App;
