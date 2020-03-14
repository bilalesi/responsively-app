import React, {Fragment} from 'react';

export default ({width, height, color, padding, margin}) => (
    <Fragment>
        <svg
            height={height}
            width={width}
            fill={color}
            style={{padding, margin}}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            version="1.1"
            x="0px"
            y="0px"
        >
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <g>
                    <path d="M32,23.004355 L32,23.004355 L32,48.995645 C32,58.9442689 40.056121,67 50,67 C59.942622,67 68,58.9403509 68,48.995645 L68,23.004355 C68,13.0557311 59.943879,5 50,5 C40.057378,5 32,13.0596491 32,23.004355 L32,23.004355 Z M28,23.004355 C28,10.8516853 37.847064,1 50,1 C62.1502645,1 72,10.8438387 72,23.004355 L72,48.995645 C72,61.1483147 62.152936,71 50,71 C37.8497355,71 28,61.1561613 28,48.995645 L28,23.004355 L28,23.004355 Z" />
                    <path d="M48,17.0085302 C48,15.8992496 48.8877296,15 50,15 C51.1045695,15 52,15.9019504 52,17.0085302 L52,24.9914698 C52,26.1007504 51.1122704,27 50,27 C48.8954305,27 48,26.0980496 48,24.9914698 L48,17.0085302 Z" />
                    <path d="M50,95.1715729 L58.5857864,86.5857864 C59.366835,85.8047379 60.633165,85.8047379 61.4142136,86.5857864 C62.1952621,87.366835 62.1952621,88.633165 61.4142136,89.4142136 L51.4142136,99.4142136 C51.0236893,99.8047379 50.5118446,100 50,100 C49.4881554,100 48.9763107,99.8047379 48.5857864,99.4142136 L38.5857864,89.4142136 C37.8047379,88.633165 37.8047379,87.366835 38.5857864,86.5857864 C39.366835,85.8047379 40.633165,85.8047379 41.4142136,86.5857864 L50,95.1715729 Z" />
                    <path d="M50,82.1715729 L58.5857864,73.5857864 C59.366835,72.8047379 60.633165,72.8047379 61.4142136,73.5857864 C62.1952621,74.366835 62.1952621,75.633165 61.4142136,76.4142136 L51.4142136,86.4142136 C51.0236893,86.8047379 50.5118446,87 50,87 C49.4881554,87 48.9763107,86.8047379 48.5857864,86.4142136 L38.5857864,76.4142136 C37.8047379,75.633165 37.8047379,74.366835 38.5857864,73.5857864 C39.366835,72.8047379 40.633165,72.8047379 41.4142136,73.5857864 L50,82.1715729 Z" />
                </g>
            </g>
        </svg>
    </Fragment>
);
