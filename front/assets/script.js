window.onload = () => {
  const buttonSortFib = document.getElementById('js-buttonSortFib');
  const buttonSortBubble = document.getElementById('js-buttonSortBuble');

  buttonSortBubble.onclick = e => {
    if (document.getElementById('numbers').value) {
      const userInput = document.getElementById('numbers').value.split(', ');
      for (let i = 0; i < userInput.length; i++) {
        userInput[i] = Number(userInput[i]);
      }

      sendSortRequest(userInput);
    } else {
      alert('Oh no! The input is empty 😭')
    }
  }

  function setResultScore(score, sortedArray) {
    document.getElementById('js-resultScore').innerText = score + ' seconds';
    document.getElementById('js-resultSorted').innerText = sortedArray;
    document.getElementById('js-result').classList.add('-visible');
  }

  async function sendSortRequest(userInput) {
    axios.post('http://89.223.26.226:5000/sortBubble', userInput)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  // async function postData(url, data) {
  //
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'no-cors', // no-cors, *cors, same-origin
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response;
  // }
}

