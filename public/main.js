const button = document.querySelector('#btn')
const alphabetSelect = document.querySelector('#alphabets-select')
const alphabetList = document.querySelector('#alphabets-list')
const wordContainer = document.querySelector('#learn-container')

const beginnerWordSelect = document.querySelector('#beginnerWords-select')
const beginnerWordList = document.querySelector('#beginnerWords-list')

const intermediateWordSelect = document.querySelector('#intermediateWords-select')
const intermediateWordList = document.querySelector('#intermediateWordLists-list')

const userInfoLocal=JSON.parse(localStorage.getItem('user'))




function getAlphabets() {
  axios.get('/alphabets')
      .then(res => {
          res.data.forEach(alphabet => {
              const option = document.createElement('option')
              option.setAttribute('value', alphabet['alphabet_id'])
              option.textContent = alphabet.name
              alphabetSelect.appendChild(option)
          })
      })
}

function getBeginnerWords() {
  axios.get('/beginnerWords')
      .then(res => {
          res.data.forEach(beginnerWord => {
              const option = document.createElement('option')
              option.setAttribute('value', beginnerWord['beginnerWord_id'])
              option.textContent = beginnerWord.name
              beginnerWordSelect.appendChild(option)
          })
      })
}

function getIntermediateWords() {
    axios.get('/intermediateWords')
        .then(res => {
            res.data.forEach(intermediateWord => {
                const option = document.createElement('option')
                option.setAttribute('value', intermediateWord['intermediateWord_id'])
                option.textContent = intermediateWord.name
                intermediateWordSelect.appendChild(option)
            })
        })
  }

function showWords() {
    var alphabetID = document.getElementById("alphabets-select").value;
    var el = document.getElementById('alphabets-select');
    var alphabettext = el.options[el.selectedIndex].innerHTML;
    var languageLevel = document.getElementById("level").value;
    removeAllChildNodes(wordContainer);
    axios.get('/wordslist', { params: { id: alphabetID, level: languageLevel} }).then(res => {

        if (!res.data || res.data.length == 0) {
            empty();
        }

        res.data.forEach(Word => {
            createWordsCard(Word, alphabettext);
        })
    }
    )
}

function createWordsCard(word, alphabettext) {
    const wordCard = document.createElement('div')
    wordCard.classList.add('words-card')
console.log(word.name)

    wordCard.innerHTML = `
    <p class="words-title">Word: ${word.name}</p>
        <div class="btns-container">
            <p class="words-title">Language level: ${word.languagelevel}</p>
            <p class="words-title">Alphabet: ${alphabettext}</p>
            <p class="words-title">Definition: ${word.description}</p>
            
            <audio controls id='audio'>
                <source src="audio/${word.name}.mp3" type="audio/mpeg">
            </audio>
        </div>
    `
    wordContainer.appendChild(wordCard);
}

function empty() {
    alert("No results found");
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

 getAlphabets()


function logout(){
    localStorage.removeItem('user')
    window.location.href='/login'
}