
function App() {

  const startQuiz = async () => {

    try {
      const url = new URL('https://opentdb.com/api.php');
      // https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple
      url.searchParams.append('amount', '5');
      url.searchParams.append('category', '5');
      url.searchParams.append('difficulty', 'easy');
      url.searchParams.append('type', 'multiple');

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('퀴즈 데이터를 불러오는데 문제가 발생했습니다!!');
      }

      const data = await response.json();

    } catch (error) {
      console.error(error);
    }

  }


  return (
    <>

    </>
  )
}

export default App
