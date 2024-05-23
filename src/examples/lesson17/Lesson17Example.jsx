import { useState } from "react";

import styles from "./Lesson17Example.module.css";

const NotificationExample = () => {
  return (
    <>
      <NotificationAdder />
      <NotificationDisplay />
    </>
  );
};

const NotificationAdder = () => {
  const [inputText, setInputText] = useState("");
  const addNotification = () => {
    if (!inputText) {
      return;
    }
  };
  return (
    <>
      <label htmlFor="notification-input">Add a notification</label>
      <input
        id="notification-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addNotification}>Add Notification</button>
    </>
  );
};

const NotificationDisplay = () => {
  const notifications = []; // Want to get the real notifications from context

  return (
    <div className={styles.notifications}>
      {notifications.map((n, i) => (
        <div
          key={`notification-${i}`}
          onClick={() => {
            // Want to delete the notification here on click
          }}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
};

export const Lesson17Example = () => {
  return (
    <div className={styles["lesson17-bg"]}>
      {/* <NotificationExample /> */}
      <Lesson17ExampleDetails />
    </div>
  );
};

const Lesson17ExampleDetails = () => {
  return (
    <div>
      <h2>
        React Context - Deep Data Sharing
        <a
          href="https://react.dev/learn/passing-data-deeply-with-context"
          target="_blank"
        >
          (Documentation)
        </a>
        <a
          href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en&pli=1"
          target="_blank"
        >
          (React DevTools)
        </a>
      </h2>

      <p>
        React Context is used to define data and data setters in one top
        location and use that in children without having to pass props.
      </p>

      <pre
        style={{
          margin: "20px auto",
          display: "block",
          width: "800px",
          maxWidth: "800px",
          overflowX: "overlay",
        }}
      >
        {`export const DataContext = React.createContext(); // Defined at file level, not inside a hook

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({ name: 'Paul' });
  return <DataContext.Provider value={{ data, setData }}>
    {children}
  </DataContext.Provider>;
}`}
      </pre>

      <h2 style={{ textAlign: "center" }}>
        Accessing the data from a child component
      </h2>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p>From a Consumer component (traditional)</p>
          <pre>{`const ChildComponent = ({ data }) => {
  return <p>{data?.name}</p>
};

const ChildComponentWrapper = () => {
  return <DataContext.Consumer>
    {props => <ChildComponent {...props} />}
  </DataContext.Consumer>;
};`}</pre>
        </div>
        <div>
          <p>From the useContext hook (preferred)</p>
          <pre>{`const { id } = useParams();
          
const ChildComponent = () => {
  const { data } = useContext(DataContext);
  return <p>{data?.name}</p>;
};`}</pre>
        </div>
      </div>
    </div>
  );
};

export default Lesson17Example;
