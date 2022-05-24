import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "./api";

function BookDetail() {
 const [book, setBook] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useNavigate();

 const { id } = useParams();

 if (!id) {
  history.push("/");
 }

 const url = BASE_URL + "/" + id;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url);

     if (response.ok) {
      const json = await response.json();
      console.log(json);
      setBook(json);
     } else {
      setError("An error occured");
     }
    } catch (error) {
     setError(error.toString());
    } finally {
     setLoading(false);
    }
   }
   fetchData();
  },
  [url]
 );

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>An error occured: {error}</div>;
 }

 return (
  <div className="book-detail">
   <h1>{book.title}</h1>
  </div>
 );
}

export default BookDetail;