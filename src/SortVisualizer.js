import React from 'react';
import ReactSlider from "react-slider";
import { useState } from "react";
import { getBubbleSortAnimations } from './sortingAlgorithms/BubbleSort.js';
import { getHeapSortAnimations } from './sortingAlgorithms/HeapSort.js';
import {getMergeSortAnimations} from './sortingAlgorithms/MergeSort.js';
import { getQuickSortAnimations } from './sortingAlgorithms/QuickSort.js';
import './SortVisualizer.css';


// main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      array: [],
      arrayBarNum: 200,
      speed: 1,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

 // reset array bars of given number and random value
  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arrayBarNum; i++) {
      array.push(randomIntFromInterval(5, 700));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        console.log(this.state.speed);
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.speed);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i+=2) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, newHeightOne] = animations[i];
        const [barTwoIdx, newHeightTwo] = animations[i+1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barOneStyle.height = `${newHeightOne}px`;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.height = `${newHeightTwo}px`;
            },  this.state.speed);
        }, i * this.state.speed);
        
    }
    }
  

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i+=2) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, newHeightOne] = animations[i];
        const [barTwoIdx, newHeightTwo] = animations[i+1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barOneStyle.height = `${newHeightOne}px`;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.height = `${newHeightTwo}px`;
            },  this.state.speed);
        }, i * this.state.speed);
        
    }
    }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i+=2) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, newHeightOne] = animations[i];
        const [barTwoIdx, newHeightTwo] = animations[i+1];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barOneStyle.height = `${newHeightOne}px`;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.height = `${newHeightTwo}px`;
              },  this.state.speed);
          }, i * this.state.speed);
        
    }
  }

  render() {

    const {array} = this.state;

    return (
      <>
      <div className='header-container'>
        <h2>Sorting Visualizer</h2>
      </div>
      <div className='slider-container'>
      <h5 className='slider-label'>Array Size: </h5>
      <ReactSlider
         className="customSlider"
         trackClassName="customSlider-track"
         thumbClassName="customSlider-thumb"
         min={20}
         max={300}
         defaultValue={200}
         value={this.state.arrayBarNum}
         onChange={(value) => 
            {
            this.setState({arrayBarNum: value});
            this.resetArray();
        }}
        />
       <h5 className='slider-label'>{this.state.arrayBarNum} </h5>
      </div>
      <div className='slider-container'>
      <h5 className='slider-label'>Sorting Speed: </h5>
      <ReactSlider
         className="customSlider"
         trackClassName="customSlider-track"ß
         thumbClassName="customSlider-thumb"
         min={50}
         max={350}
         defaultValue={100}
         value={350-this.state.speed*100}
         onChange={(value) => 
            {
            this.setState({speed: (3.5-value/100)});
        }}
        />
       <h5 className='slider-label'>{(3.5-this.state.speed).toFixed(2)}</h5>
      </div>
      <div className='button-container'>
      <button onClick={() => this.resetArray()}>Generate New Array</button>
      <button onClick={() => this.mergeSort()}>Merge Sort</button>
      <button onClick={() => this.quickSort()}>Quick Sort</button>
      <button onClick={() => this.heapSort()}>Heap Sort</button>
      <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
    </div>
      <div className="array-container">
            {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                    }}></div>
            ))} </div></>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

