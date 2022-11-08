import { Routes, Route } from "react-router-dom";
import AllQuotes from './Pages/AllQuotes';
import NewQuote from './Pages/NewQuote';
import QuoteDetail from './Pages/QuoteDetails';
import Layout from './components/layout/Layout';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/Quotes" exact element={<AllQuotes />} />
          <Route path='/Quotes/:quoteID' element={<QuoteDetail />} />
          <Route path="/NewQuote" element={<NewQuote />} />
        </Routes>
     </Layout>

    </>
  );
}

export default App;
