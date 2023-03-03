import {useEffect, useState} from 'react';

function useFetch(url, config = "") {
  const [state, setState] = useState({
    items: [],
    loading: true
  })

  useEffect(() => {
    (async () => {
      const response = await fetch(url, config);
      const responseData = await response.json();
      if (response.ok) {
        setState({items: responseData, loading: false});
      } else {
        setState((s) => ({...s, loading: true}));
      }
    })()
  }, []);

  return [state.loading, state.items];
}

export default useFetch;
