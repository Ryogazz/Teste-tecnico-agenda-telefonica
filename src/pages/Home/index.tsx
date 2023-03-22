import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Form from './components/Form';

const Home = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-between items-center bg-gray-100'
    >
      <Menu />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;