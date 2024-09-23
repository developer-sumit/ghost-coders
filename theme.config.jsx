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
  footer: {
    text: (
      <span>
        Developed by&nbsp;
        <a
          href="https://giantguy.web.app"
          target="_blank"
          style={{ color: "#f97316" }}
        >
          Sumit Singh Rathore
        </a>
        &nbsp;- Team Leader of Ghost Coders
      </span>
    ),
  },
  logo: <span>Team Ghost Coders</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ghost Coders" />
      <meta
        property="og:description"
        content="Team Ghost Coders presenting the SIH project on the statement 'SIH1699'"
      />
    </>
  ),
  project: { link: "https://github.com/developer-sumit/ghost-coders" },
  editLink: false, // Disables "Edit this page" link
  feedback: false, // Disables "Question? Give us feedback →" link
};
