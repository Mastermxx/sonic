import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterPanel from '../components/FilterPanel';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import products from '../db/toolboxes.json';

interface Product {
  id: string;
  name: string;
  number: string;
  price: number;
  images: { url: string; quality: string }[];
  numberOfDrawers: string;
  maxLoad: string;
  expectedDeliveryDate: string;
}

function ProductsPage() {
  const [currentItems, setCurrentItems] = useState<Product[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchParams] = useSearchParams();

  const itemsPerPage = 10;

  // Filter options
  const maxLoadOptions = ['400kg', '900kg', '1050kg'];
  const drawersOptions = ['6', '7', '8'];

  // Extract selected filters from URL
  const selectedMaxLoad = useMemo(() => searchParams.getAll('maxLoad'), [searchParams]);
  const selectedDrawers = useMemo(() => searchParams.getAll('drawers'), [searchParams]);

  // Calculate filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (selectedMaxLoad.length === 0 || selectedMaxLoad.includes(product.maxLoad)) &&
        (selectedDrawers.length === 0 || selectedDrawers.includes(product.numberOfDrawers))
    );
  }, [selectedMaxLoad, selectedDrawers]);

  useEffect(() => {
    // Paginate filtered products
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [filteredProducts, itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col gap-2 justify-center">

      <div className="flex flex-row gap-4">
        <FilterPanel maxLoadOptions={maxLoadOptions} drawersOptions={drawersOptions} />
        {filteredProducts.length > 0 ? (
          <ProductList products={currentItems} />
        ) : (
          <div className="text-center text-gray-500 p-4">
            No results based on your filters
          </div>
        )}
      </div>
      {filteredProducts.length > 0 && (
        <div>
          <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
