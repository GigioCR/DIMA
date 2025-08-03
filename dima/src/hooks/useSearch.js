import { useState } from 'react';

export function useSearch(searchFunction, initialValue = '') {
  const [query, setQuery] = useState(initialValue);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchQuery = query) => {
    if (!searchQuery.trim()) {
      setError('Por favor ingrese un valor para buscar');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const searchResult = await searchFunction(searchQuery.trim());
      if (searchResult) {
        setResult(searchResult);
        setError(null);
      } else {
        setResult(null);
        setError('No se encontraron resultados');
      }
    } catch (err) {
      setError('Error al realizar la búsqueda');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    // Clear previous results and errors when user types
    if (result || error) {
      setResult(null);
      setError(null);
    }
  };

  const reset = () => {
    setQuery(initialValue);
    setResult(null);
    setError(null);
    setIsLoading(false);
  };

  return {
    query,
    result,
    isLoading,
    error,
    handleSearch,
    handleQueryChange,
    reset,
    hasResult: !!result,
    hasError: !!error
  };
}
