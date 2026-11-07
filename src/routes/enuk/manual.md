
<m3e-content-pane>

# MTF.LGBT User Manual

<m3e-callout variant="tertiary">
    <m3e-icon slot="icon" name="info"></m3e-icon>
    <span slot="label">Important!</span>
    <p>Regardless of how comprehensive or polished the translation of this manual may be, if you want to stay up to date with newly added sections and revisions, please always refer to the <b>Simplified Chinese</b> version of this manual! Even if you cannot read Chinese, you can always ask an AI to translate it for you.</p>
    <p>You might be wondering why we are using British English rather than American English. The reason is that the site administrator is from Mainland China and specialises in Japanese studies. English is not exactly my strongest subject! Therefore, whenever new features are introduced, their documentation will be added to the Simplified Chinese version of this manual first.</p>
</m3e-callout>

## Introduction

Welcome to the MTF.LGBT User Manual.

MTF.LGBT is a community-oriented, non-profit project aimed at the transgender community. We hope to provide services such as domain names, email accounts, content publishing and communication, to the best of our ability.

This manual brings together instructions for applying for and using the project's current features, including third-level domain applications, email registration, article and Subtitle submissions, RSS and email subscriptions, translation contributions, link exchanges, bug reports, Pull Requests and partnership enquiries.

If this is your first time here, you can use the contents to find the section you need. If you have already used some of our services, you can also treat this manual as a reference guide whenever you need it.

As the project is maintained by the site administrator and volunteers, essential infrastructure such as domain renewals and email services relies on donations and limited resources. Please apply only for what you need and use our services responsibly. Domain applications, article submissions and other contributions generally require moderation, so please be patient and avoid submitting the same request multiple times.

This manual will be updated as the website evolves. If the instructions here differ from what you see on the website, please follow the actual website interface and the responses provided in the relevant GitHub Issues. Features that are still being developed or are not yet available will be marked accordingly in their respective sections.

If you encounter a problem, we recommend reading the relevant section first. If the issue remains unresolved, feel free to ask in GitHub Issues. Please include screenshots, links and steps to reproduce the problem whenever possible.

Thank you to everyone who uses our services, submits articles, contributes translations, provides feedback and makes donations. We hope this manual makes using MTF.LGBT a little easier. We also welcome more people to join us in maintaining the project, so that this can become a genuinely useful space for the transgender community.

## Applying for a Third-Level Domain

> Here is what we currently know: the free version of Cloudflare does not support adding third-level domains in our current setup. If you wish to use Cloudflare, please contact their support team separately. This may involve additional subscription fees.
>
> At present, DNSPod appears to work, but verification of the primary domain is required. Further discussions may be necessary. Other DNS providers have not yet been tested.

Third-level domains under mtf.lgbt are available by application only.

Please open an [Issue](https://github.com/mtf-lgbt/MTF-WebSite/issues) on our website's GitHub repository.

Specifically, click the green **New issue** button in the top-right corner.

![Location of the New issue button](https://github.com/user-attachments/assets/48601684-c876-4704-b6fa-a53741e31222)

On the page that appears, select the **domain apply** option.

Then simply follow the instructions and fill in the required information.

The third question in the application form may be a little difficult to understand.

Generally speaking, if you want to use a domain name, you will need a DNS provider. When applying, you need to obtain **two** DNS server addresses from your domain or DNS provider.

Please note that you need two addresses, not just one.

In most cases, you can simply enter these two addresses directly into the corresponding field.

## Email

Click [here](https://mail.mtf.lgbt) to log in or register an account.

Due to financial constraints, support for third-party email clients is currently unavailable.

## Article and Subtitle Submissions

Click [here](https://forms.gle/b4BHnN71oqEskqYL9) to submit your content.

Your submission will be reviewed, and you will be notified of whether it has been accepted.

As the form is hosted on Google Forms, you will need access to Google services to complete it, as well as a Google account.

## Subscriptions

Click [here](/rss.xml) to visit our RSS feed, or copy the following URL into your preferred RSS reader:

`https://mtf.lgbt/rss.xml`

You will need an RSS reader application or a browser extension to subscribe. These can generally be found in your browser's extension store. Which one you choose is entirely up to your personal preference.

> The website currently has an email subscription feature, but it is undergoing an upgrade and redevelopment for various reasons and is not yet available.
>
> However, the subscription forms are still accessible:
>
> [Microsoft Forms](https://forms.cloud.microsoft/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAUP3MTtUQldJNzFLQjZVRTE0RVRWWExCUUdUUDhORi4u&route=shorturl)
>
> [Google Forms](https://forms.gle/v3Q9DCPZLApLHkFn8)

> BTW, I'm a little short on time. The following sections are not finished yet. Please bear with me!

### Translation Contributions

> This section is particularly important. I will also document these instructions in README.md.

First of all, thank you very much for contributing translations to our project!

Our translation system is divided into two parts: **String Translation** and **Content Translation**.

Here are the differences between them:

| Aspect | String Translation | Content Translation |
| --- | --- | --- |
| Description | Uses the native i18n internationalisation module to translate elements such as titles, button labels and link text. These translations generally remain relatively stable. | Used for longer texts, events, announcements and other content that is not convenient to store in JSON files. For example, the About Us page. This content is updated more frequently than string translations. |
| Characteristics | Translations must correspond strictly to their original entries, one by one. However, if you find that a file contains too many entries, you may split some of them into separate files. (The site administrator warns you not to split things so abstractly that nobody else can understand the structure!) | Different languages can contain entirely different content, and may even include region-specific event announcements. This is no longer quite the same as conventional translation; it is more like localisation. The difference is that this localisation is controlled by the selected translation language, rather than having separate language and region settings as we usually see. |
| Location | `./src/i18n` | `./src/routes` |

#### String Translation

First, let's take a look at the current directory structure (as of 24 October 2026):

```dash
src/i18n
├── i18n.js
├── ja
│   ├── blogs.js
│   ├── friends.js
│   ├── home.js
│   └── master.js
└── zh-cn
    ├── blogs.js
    ├── friends.js
    ├── home.js
    └── master.js
```

Within this structure, `i18n.js` acts as the registration file, bringing together the project's basic translation configuration.

##### Registration

First, you need to import a root file at the top of `i18n.js`. This will serve as the entry point for your language translation.

Normally, the root file should be created at:

`src/i18n/<Language Code>/master.js`

Next, you need to add the name of the file you just imported to `messages`.

For example, if you write:

```js
import enus from './en-us/master.js'
```

Then you need to use `enus` as the corresponding key in `messages`.

##### Structure

There is not much to explain here. You can simply follow the structure of the existing language files.

There is just one important thing to keep in mind:

This is the basic structure of a root translation file:

```js
const zhcn = {
    { ... }
}
export default zhcn;
```

All you need to do is make sure that the name following `const` and the name following `default` are identical, and that they also match the corresponding import name in `i18n.js`.

#### Content Translation

This part is relatively straightforward.

Create a folder under `/src/routes/` for your language (if nobody has created one already).

Inside that folder, create a Markdown file named after the page you wish to translate, with the `.md` extension.

For example, to translate the About Us page, create:

`about.md`

There is one exception: the homepage, which is commonly referred to as `index` in programming.

For the homepage, you must create `home.md` rather than `index.md`.

Additionally, the folder name you create must match the name used when importing the language's root file in `src/i18n/i18n.js`.

As for writing the content itself, please refer directly to the [VitePress documentation](https://vitepress.dev/guide/getting-started).

The relevant plugin processes these files as if they were VitePress pages, even though this project is a proper Vue application.

#### Language Settings and setting.js

Simply add your language to the list around line 98 of:

`src/components/setting.vue`

## Link Exchange

## Bug Reports

## Pull Request Submissions

## Partnerships

</m3e-content-pane>
