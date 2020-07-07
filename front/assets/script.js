window.onload = () => {
  const buttonSortSelection = document.getElementById('js-buttonSortSelection');
  const buttonSortBubble = document.getElementById('js-buttonSortBuble');

  buttonSortBubble.onclick = e => {
    if (document.getElementById('js-numbers').value) {
      const userInput = document.getElementById('js-numbers').value.split(',');
      for (let i = 0; i < userInput.length; i++) {
        userInput[i] = Number(userInput[i]);
      }
      sendSortRequest('sortBubble', userInput);
    } else {
      alert('Oh no! The input is empty 😭')
    }
  }

  buttonSortSelection.onclick = e => {
    if (document.getElementById('js-numbers').value) {
      const userInput = document.getElementById('js-numbers').value.split(',');
      for (let i = 0; i < userInput.length; i++) {
        userInput[i] = Number(userInput[i]);
      }
      sendSortRequest('sortSelection', userInput);
    } else {
      alert('Oh no! The input is empty 😭')
    }
  }

  function setResultScore(score, sortedArray) {
    document.getElementById('js-resultScore').innerText = score + ' seconds';
    document.getElementById('js-resultSorted').innerText = sortedArray;
    document.getElementById('js-result').classList.add('-visible');
  }

  async function sendSortRequest(requestType, userInput) {
    axios.post('http://89.223.26.226:5000/' + requestType, {
      array: userInput
    })
        .then(function (response) {
          console.log(response);
          setResultScore(response.data.resolveTime, response.data.result)
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  // Заполняет текстэрию массивом произвольных чисел
  let bigArray = [];
  for (let i = 0; i < 3000; i++) {
    bigArray.push(Math.floor(Math.random() * Math.floor(3000)));
  }
  document.getElementById('js-numbers').value = bigArray;
}

