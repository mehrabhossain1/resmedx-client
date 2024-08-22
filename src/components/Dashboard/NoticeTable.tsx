"use client";
import { useEffect, useState } from "react";

const NoticeTable = () => {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/notices");
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const handleEdit = (id: string) => {
    console.log("Edit notice with ID:", id);
    // Implement edit functionality here
  };

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this notice?");
    if (confirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/notices/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setNotices(notices.filter((notice) => notice._id !== id));
        } else {
          console.error("Failed to delete notice");
        }
      } catch (error) {
        console.error("Error deleting notice:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={notice._id}>
              <th>{index + 1}</th>
              <td>{notice.title}</td>
              <td>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleDelete(notice._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeTable;
