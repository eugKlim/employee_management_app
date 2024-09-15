import Widget from '../../Components/Widget/Widget-list';
import EmployeeList from '../../Components/Employee-list/Employee-list';
import Filter from '../../Components/Filter/Filter-list';
import Search from '../../Components/Search/Search';

const Home: React.FC = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <Search />
          <Filter />
          <Widget />
        </div>
      </aside>
      <section className="content">
        <EmployeeList />
      </section>
    </div>
  );
};

export default Home;
