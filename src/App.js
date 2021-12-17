import Routes from './routes';
import { QueryClientProvider } from 'react-query';
import queryClient from './services/clientProvider';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
