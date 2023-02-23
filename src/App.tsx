import reactLogo from './assets/react.svg';
import './App.css';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { RecoilRoot } from 'recoil';

function App() {
    const [count, setCount] = useState(0);

    return (
        <RecoilRoot>
            <div className="App">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                    <span
                        css={css`
                            font-size: 32px;
                        `}
                    >
                        Edit <code>src/App.tsx</code> and save to test HMR!
                    </span>
                </div>
                <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            </div>
        </RecoilRoot>
    );
}

export default App;
