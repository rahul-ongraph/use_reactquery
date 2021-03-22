import React from 'react'
import Query from './components/use_query'
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new  QueryClient();
function App() {
  return (
   <div>
     <QueryClientProvider client={queryClient}>
   <Query/>
   </QueryClientProvider>
   </div>
  );
}
export default App;
