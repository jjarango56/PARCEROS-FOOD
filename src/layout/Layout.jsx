import { Data } from '../components/petition/Data';
import { Nav } from '../components/user/Nav';
export const Layout = () => {
  return (
    <div className="">
      <Nav/>
      <main className="">
      <Data/>
      </main>
    </div>
  );
};
