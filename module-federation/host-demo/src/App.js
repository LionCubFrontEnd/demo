import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("remote/App"));

function App() {
  return (
    <div>
      <div
        style={{
          margin: "24px",
          padding: "24px",
          textAlign: "center",
          backgroundColor: "gray",
        }}
      >
        <h1>this is host-demo</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
