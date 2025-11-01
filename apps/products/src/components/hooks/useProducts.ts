import { useState } from 'react';
import { Product, getAllProducts } from '../../helpers';
import { useAsync } from './useAsync';

interface UseProductsReturn {
  products: Product[];
  displayedProducts: Product[];
  loading: boolean;
  error: string | null;
  showingAll: boolean;
  handleShowMore: () => void;
  handleShowLess: () => void;
}

export const useProducts = (initialDisplayCount = 8): UseProductsReturn => {
  const { data: products, loading, error } = useAsync(getAllProducts);
  const [showingAll, setShowingAll] = useState(false);

  const displayedProducts = !products
    ? []
    : showingAll
    ? products
    : products.slice(0, initialDisplayCount);

  const handleShowMore = () => setShowingAll(true);
  const handleShowLess = () => setShowingAll(false);

  return {
    products: products || [],
    displayedProducts,
    loading,
    error,
    showingAll,
    handleShowMore,
    handleShowLess,
  };
};
