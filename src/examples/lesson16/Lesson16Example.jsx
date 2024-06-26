import "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams, Outlet } from "react-router-dom";

import styles from "./Lesson16Example.module.css";

export const Home = () => {
  return (
    <>
      <h2>
        React Router DOM - Navigation in React
        <a href="https://reactrouter.com/en/main" target="_blank">
          (Documentation)
        </a>
        <a href="https://duckandcover.cx/" target="_blank">(Traditional Website Example)</a>
      </h2>
     
      <p>
        React router is used to provide URL links to parts of your application
        and navigation functionality
      </p>

      <pre>
        {`<Router> // Need to define this outside of everything that uses the router
  // Any other children that use router, for example <Link />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={<p>Not found!</p>} />
  </Routes>
</Router>`}
      </pre>

      <h2>Important hooks from react-router-dom</h2>
      <p>
        <a
          target="_blank"
          href="https://reactrouter.com/en/main/hooks/use-navigate"
        >
          useNavigate:
        </a>
        Returns a function allowing us to navigate with code
      </p>
      <pre>{`const navigate = useNavigate();`}</pre>
      <p>
        <a
          target="_blank"
          href="https://reactrouter.com/en/main/hooks/use-params"
        >
          useParams:
        </a>
        Returns an object with values substituted for path templates
      </p>
      <pre>{`const { id } = useParams();`}</pre>
    </>
  );
};

export const ParameterizedRoutes = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Parameterized routes</h2>
      <p>
        Routes can use values in the URL to tell the client to navigate to a
        page with some extra context
      </p>
      <pre>{`<Route path="/users/:id" element={<Users />} />`}</pre>
      <br />
      <button onClick={() => navigate('/users/1')}>Navigate to User 1</button>
      <button onClick={() => navigate('/users/2')}>Navigate to User 2</button>
    </>
  );
};

export const About = () => {
  return <p>About me!</p>;
};

export const Contact = () => {
  return <p>Contact information</p>;
};

export const Users = () => {
  const { userId } = useParams();

  const data = {
    1 : {
      name: 'Paul',
      email: 'paul@email.com'
    },
    2: {
      name: 'Frank',
      email: 'frank@gmail.com'
    }
  }

  const user = data[userId];

  if (userId in data) {
    return <p>User Details: Name - {user.name}  Email - {user.email}</p>;
  }
  
  return <p>Invalid User</p>
}

export const Lesson16Example = () => {
  return (
    <Router>
      <div className={styles["lesson16-bg"]}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/parameters">Parameterized Routes</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/nested/*" element={<p>Always include me!<Outlet /></p>}>
              <Route path="nested1" element={<p>Nested Route 1</p>} />
              <Route path="nested2/*" element={<p>Always include me (too)! <Outlet /></p>}>
                <Route index element={<p>Nested Route 2</p>}></Route>
                <Route path="nested3" element={<p>Nested Route 3</p>}></Route>
              </Route>
            </Route>
            <Route path="/users/:userId" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/parameters" element={<ParameterizedRoutes />} />
            <Route path="/*" element={<p>Not found!</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Lesson16Example;
