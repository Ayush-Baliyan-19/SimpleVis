import { useCallback, useEffect, useState, useRef } from "react"
import "./multiRangeSlider.css"

const MultiRangeSlider = ({ min, max, setRange, Range }) => {
  const [minVal, setMinVal] = useState(Range.min);
  const [maxVal, setMaxVal] = useState(Range.max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value) // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  return (
    <div className="container">
      <div className="priceandrange w-[100%] flex flex-col justify-around items-start text-sm font-semibold text-[--main-gray] gap-3 pb-3">
        <div className="fromto w-[100%] flex justify-center relative items-center text-xs">
          <div className="flex flex-col gap-2 bg-[#8c79f9] px-3 py-2 rounded-lg relative">
            <div className="font-regular">From</div>
            <p>{Range.min}</p>
          </div>
          <div className="flex justify-start items-start w-full relative">
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              ref={minValRef}
              onChange={event => {
                const value = Math.min(Math.min(+event.target.value, maxVal), Range.max - 1) // Remove the "- 1" here
                setMinVal(value)
                event.target.value = value.toString()
                setRange(prevRange => {
                  return {
                    ...prevRange,
                    min: value
                  }
                })
              }}
              className={`thumb thumb--zindex-3, ${minVal > max - 100 ? "thumb--zindex-5" : ""
                }`}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              ref={maxValRef}
              onChange={event => {
                const value = Math.max(Math.max(+event.target.value, minVal), Range.min + 1) // Ensure the max value is not less than 1
                setMaxVal(value)
                event.target.value = value.toString()
                setRange(prevRange => {
                  return {
                    ...prevRange,
                    max: value
                  }
                })
              }}
              className="thumb thumb--zindex-4"
            />
            <div className="slider">
              <div className="slider__track"></div>
              <div ref={range} className="slider__range"></div>
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((dotValue, index) => (
                  <div key={index} className="slider__dot py-2">
                    .
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-[#8c79f9] px-3 py-2 rounded-lg">
            <div className="">Upto</div>
            <p>{Range.max}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
