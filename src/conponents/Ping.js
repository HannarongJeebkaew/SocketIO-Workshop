import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const Ping = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("nodeStatus", ({ id, ip, status, label }) => {
      setData((prevData) => ({
        ...prevData,
        [id]: { id, label, status, ip },
      }));
    });
  });
  const tableRows = Object.values(data).map((node) => (
    <tr>
      <td>{node.id}</td>
      <td>{node.label}</td>
      <td>{node.status}</td>
      <td>{node.ip}</td>
      <td><span className={`status-circle ${node.status==="up"?"up":"down"}`}/></td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>label</td>
            <td>status</td>
            <td>ip</td>
          </tr>
        </thead>
        {tableRows}
      </table>
    </div>
  );
};

export default Ping;
