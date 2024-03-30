import { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import ProductList from "./components/productList";
import Pagination from "./utils/pagination";

function App() {
  // State
  const [productList, setProductList] = useState([]); // Store the fetched product list
  const [filteredList, setFilteredList] = useState([]); // Store the filtered product list
  const [loading, setLoading] = useState(false); // Loading state while fetching data
  const [error, setError] = useState(false); // Error state if there's an issue with fetching data
  const [currentPage, setCurrentPage] = useState(1); // Current page number for pagination
  const [postPerPage] = useState(10); // Number of products to display per page

  // Fetch product list
  const getProductList = async () => {
    //Initialize loading state
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
  
      if (!response.ok) {
        setLoading(false);
        setError(true);
      }
  
      const data = await response.json();
      setLoading(false);
      setProductList(data); // Set the fetched product list
      setFilteredList(data); // Set the filtered product list to initially match the fetched list
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  //Initialize product list when page renders
  useEffect(()=>{
    getProductList(); // Fetch the product list when the component mounts
  },[]);

  // Filter search query
  const filterSearchQuery = (data) => {
    let filteredResult = '';
  
    if (data === "men" || data === "Men") {
        filteredResult = productList.filter((list) => {
            const lowerCaseCategory = list.category.toLowerCase(); // Convert category data to lowercase
            return lowerCaseCategory === "men's clothing"; // Check for exact match
        });
    } else {
        const lowerCaseData = data.toLowerCase(); // Convert search query to lowercase
        filteredResult = productList.filter((list) => {
            const lowerCaseCategory = list.category.toLowerCase(); // Convert category data to lowercase
            return lowerCaseCategory.includes(lowerCaseData); // Check for inclusion
        });
    }
    setFilteredList(filteredResult); // Update the filtered product list
};

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = filteredList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <>
      {/* Navbar component for search functionality */}
      <Navbar onfilterSearchQuery={filterSearchQuery} />

      {/* ProductList component to display the products */}
      <ProductList products={currentPost} loading={loading} error={error} />

      {/* Pagination component for navigating through pages */}
      <Pagination postsPerPage={postPerPage} totalPost={filteredList.length} paginate={paginate} currentPage={currentPage} />
    </>
  );
}

export default App;
