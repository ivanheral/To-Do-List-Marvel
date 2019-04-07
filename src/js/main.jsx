import { h, render } from 'preact';
import Router from 'preact-router';
import Search from './pages/Search';
import { css } from 'emotion';

const Main = () => {
    return (
        <div className={css`
        border: 1px dashed gray;
        max-width: 992px;
        margin: 0 auto;
        `}>
            <Router>
                <Search path="/" />
            </Router>
        </div>
    );
};

render((<Main />), document.getElementById('app'))
