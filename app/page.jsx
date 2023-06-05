import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Create, Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Prompts for Your Large Language Model of Choice</span>
    </h1>
    <p className="desc text-center">
      PromptShare is an open-source AI prompting tool for modern Internet users to
      discover, create and share creative prompts.
    </p>

    <Feed />
  </section>
);

export default Home;
