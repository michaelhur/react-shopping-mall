import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getClient } from './queryClient';
import Gnb from './components/gnb';

const App = () => {
    const elem = useRoutes(routes);
    const queryClient = getClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Gnb />
            {elem}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
