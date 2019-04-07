import { h, render } from 'preact';
import Heroe from './Heroe';
import { css } from 'emotion';

export default (props) => {
    if (props.results != undefined) {
        return (
            <div className={css`
            display: grid;
            grid-gap: 15px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            @media (max-width: 992px) {
                grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 420px) {
                grid-template-columns: 100%;
            }
            `}>
                {
                    props.results.map(item => (
                        <Heroe {...item} />
                    ))
                }
            </div>
        );
    }
}
