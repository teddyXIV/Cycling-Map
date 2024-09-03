import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

//custom hook for fetching current user's routes

const useDb = (fn, user) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn(user);
      setData(response);

    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch = () => fetchData();

  return { data, isLoading, refetch }
}

export default useDb;