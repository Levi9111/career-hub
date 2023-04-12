import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-green-100 text-2xl p-8 text-gray-700 space-y-5 ">
        <h3 className="text-center text-3xl italic underline">
          Basic React Hook Questions
        </h3>
        <div className="">
          <p className="italic">a. When should you use context API?</p>
          <p className="py-2">
            <span className="underline font-bold bg-green-300 p-2 rounded-xl">
              Ans:
            </span>
            Context API is used to provide connection between two or more
            components in a react app. When ever it is necessary to pass data
            between components,specially deeply nested components Context API
            should be used.
          </p>
        </div>
        <div className="">
          <p className="italic">b. What is a custom hook?</p>
          <p className="py-2">
            <span className="underline font-bold bg-green-300 p-2 rounded-xl">
              Ans:
            </span>
            A custom hook is a function that will be called when the component
            or components may be called more than once and may follow a complex
            logic. A custom hook starts with the word "use" and is used to
            simplify the logic and to reduce repeatation. Such examples are
            'useEffect()' 'useEffect()' 'useToggle()' and so on.
          </p>
        </div>
        <div className="">
          <p className="italic">c. What is useRef?</p>
          <p className="py-2">
            <span className="underline font-bold bg-green-300 p-2 rounded-xl">
              Ans:
            </span>
            'useRef' is a React hook that is used to create a reference to the
            input element using the ref attribute. The main plus point of useRef
            is that useRef doesn't cause a component to re-render when the value
            or state changes.
          </p>
        </div>
        <div className="">
          <p className="italic">d. What is useMemo?</p>
          <p className="py-2">
            <span className="underline font-bold bg-green-300 p-2 rounded-xl">
              Ans:
            </span>{" "}
            'useMemo' is a React hook that is used to calculate function or
            values and to prevent expensive and intensive functions from running
            needlessly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
