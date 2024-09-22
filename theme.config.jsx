export default {
  useNextSeoProps() {
    return { titleTemplate: "%s - Ghost Coders" };
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://youtube.com/" target="_blank">
        🎉 Check our explaination video on YouTube
      </a>
    ),
  },
  navigation: { prev: true, next: true },
  footer: { text: <span>Team Ghost Coders</span> },
  logo: <span>Team Ghost Coders</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ghost Coders" />
      <meta
        property="og:description"
        content="Documenting our SIH project in details"
      />
    </>
  ),
  project: { link: "https://github.com/developer-sumit/ghost-coders" },
  editLink: false, // Disables "Edit this page" link
  feedback: false, // Disables "Question? Give us feedback →" link
};
