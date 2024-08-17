// pages/index.js
import Header from './components/Header';
import Footer  from './components/Footer';
import MainComponent from './components/MainComponent';
export default function Home() {
  return (
    <div>
      <Header />
      <MainComponent/>
      <Footer/>
      <main className="p-8">
      </main>
    </div>
  );
}
