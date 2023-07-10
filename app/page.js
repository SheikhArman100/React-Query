import TopicContainer from "./components/TopicContainer";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <h2 className="text-lg sm:text-2xl font-bold">
        Powerful asynchronous state management for React and NextJS
      </h2>
      <p className="text-xs text-gray-400 mt-1">
       Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code. TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TopicContainer
          title="Fetching Products"
          destination="/FetchingProducts"
        />
      </div>
    </div>
  );
}
