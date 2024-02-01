import React, { useState } from 'react';

const DictionaryApiExample = () => {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [list, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const result = await response.json();
      setData(result[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Dictionary API Example</h2>
      <label>
        Enter a word:
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Search</button>

      {data && (
        <div>
          <h3>{data.word}</h3>
          <p>Phonetic: {data.phonetic}</p>
          {data.phonetics && (
            <div>
              <p>Phonetics:</p>
              <ul>
                {data.phonetics.map((phonetic, index) => (
                  <li key={index}>
                    {phonetic.text}
                    {phonetic.audio && (
                      <audio controls>
                        <source
                          src={`https:${phonetic.audio}`}
                          type="audio/mpeg"
                        />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p>Origin: {data.origin}</p>
          {data.meanings && (
            <div>
              <p>Meanings:</p>
              {data.meanings.map((meaning, index) => (
                <div key={index}>
                  <p>{meaning.partOfSpeech}</p>
                  {meaning.definitions.map((definition, idx) => (
                    <div key={idx}>
                      <p>{definition.definition}</p>
                      <p>Example: {definition.example}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DictionaryApiExample;
