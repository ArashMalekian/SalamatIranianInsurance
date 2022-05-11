import Header from "./components/header/Header";
import { Main } from "./components/main/Main";
import { ActionContext } from "./contexts/ActionContext";
import { AppContext } from "./contexts/AppContext";
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


function App() {
  return (
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
      console.log("errrrrror");
    }}>
    <ActionContext>
    <AppContext>
      <Header />
      <Main />
    </AppContext>
    </ActionContext>
    </ErrorBoundary>
  );
}

export default App;
