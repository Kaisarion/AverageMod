# 🤖 AverageMod Discord.js Bot
Welcome to the official repository for the Discord bot that runs the [AverageJonas](https://discord.gg/AverageJonas), community. This bot was developed by me, Kaisarion, while mentoring ReeceDead <br/>
<br/>
**DISCLAIMER:** This bot was made solely for AJ's Discord, so some commands are tweaked to that. Please be sure to read comments and change things if you will use it for your server.

## ☁️ Getting Started
**Requirements & Setup:**
1. A Discord Bot Application **[(Register Here)](https://discord.com/developers/applications)** <br/>

2. Create a new application on [Discord](https://discord.com/developers/applications) like so: 
![Application Creation](https://i.imgur.com/GsjFOY7.png) <br/>

3. Give it a name! 
![Application Naming Process](https://i.imgur.com/cWTPN6O.png) <br/>

4. When you have completed, you should see a page application like below. You’ll see information like a client ID, but that's not what we need.
![Complete](https://i.imgur.com/lAXO83I.png) <br/>

5. Create your bot user by navigating to the bot section and hitting Add Bot.
![Add Bot EX](https://i.imgur.com/9paPpGB.png) <br/>

6. Once your bot has been created, you should see a page like below. Make sure to hit COPY and store this copied selection somewhere safe, because once someone has that, destruction of a server/your bot can easily be caused. This is called your bot token.
![Token](https://i.imgur.com/a2obhQG.png) <br/>

7. Add your bot to a test server in Discord. You can do this by redirecting yourself in [The Developer Portal](https://discord.com/developers/applications) by clicking Oauth2. Select bot, then give it Administrator permissions. If you make it public, I highly discourge keeping the Administrator perms. Then, copy the link it gives you. The link should look like the one below, `https://discord.com/oauth2/authorize?client_id=717901936648781888&permissions=306052336&scope=bot`
![OATH2](https://i.imgur.com/hZTzAc0.png) <br/>

8. **EDIT YOUR ENV.** This is the most important step because you put your token and API key here. Replace the file name `.env.example` with `.env` for it to work properly, then replace `TOKEN=YOURTOKENHERE` with your token. Make sure to also replace `HYPIXELAPI_KEY=YOURAPIKEYHERE` with your key generated in step 2. <br/>

9. **Install all the fancy npm packages!** This is also a fun step. Go into your terminal directory to your bot wherever it's being hosted and type `npm i`. This auto installs the packages this bot relies on!  <br/>

10. To run: `node bot.js`
  - After that, console should start spitting out a table and a green ready message.
  - If it works, you should be able to run your bot's help command in your server! <br/>
  <br/>

## 🖇 Hosting
If you want to host this bot without having to re-run it locally on your computer and restarting it every time you shut it down, I suggest the following:

<br/>

**VPS:** <br/>
[Heroku, for private bots:](https://heroku.com)<br/>This has free hosting, and runs for the entire month if you link a valid debit/credit card too! This is how I host my public bot, [Amour](https://amourbot.com) (On a professional dyno.) <br/>
<br/>
[DigitalOcean, a VPS company:](https://m.do.co/c/aecdbe57ea38)<br/>This is also a good solution, with a range of operating systems such as Ubuntu, which is a personal favorite (: <br/>
<br/>
[Glitch:](https://glitch.com/)<br/>This is a simple yet effective host, especially for plain bots like this. Put your token in and you're off. Just make sure your project is private, or people can steal your tokens! <br/>
<br/>
[Repl.it:](https://repl.it/)<br/>This site can grab your GitHub repository with ease if you clone this one and edit it to your liking, and it has been efficient for me in the past when working on small bots for friends.
<br/>

<br/>

## 📞 Support
If you need help setting up the bot or are having trouble, feel free to reach out to me at bea@beasleeps.tech, my [Twitter](https://twitter.com/AmourKrim), or my Discord, Krim#0001.

Good luck!

