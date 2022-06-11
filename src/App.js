import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div class="bg-slate-50">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
