import { Product, getProductById } from '../../helpers';
import { useAsync } from './useAsync';

interface UseProductReturn {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

export const useProduct = (id: string | undefined): UseProductReturn => {
  const {
    data: product,
    loading,
    error,
  } = useAsync(() => {
    if (!id) throw new Error('Product ID is required');
    return getProductById(Number(id));
  }, id);

  return { product, loading, error };
};
