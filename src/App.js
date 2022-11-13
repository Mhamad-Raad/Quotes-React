import { Routes, Route, Navigate } from "react-router-dom";
import AllQuotes from './Pages/AllQuotes';
import NewQuote from './Pages/NewQuote';
import QuoteDetail from './Pages/QuoteDetails';
import Layout from './components/layout/Layout';
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to={'./Quotes'} />} />
          <Route path="/Quotes" exact element={<AllQuotes />} />
          <Route path='/Quotes/:quoteID/*' element={<QuoteDetail />} />
          <Route path="/NewQuote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     </Layout>

    </>
  );
}

export default App;
